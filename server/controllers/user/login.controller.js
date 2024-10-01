import fs, { readFileSync } from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import env from "dotenv";
env.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const findEmail = result.users.find((el) => el.email == email);

  if (!findEmail) {
    res.status(400).send("Email wrong");
    return;
  }

  const isMatch = await bcrypt.compareSync(password, findEmail.password);

  if (!isMatch) {
    res.status(400).send("password is not match");
    return;
  }

  const token = jwt.sign(
    { userId: findEmail.userId, email: findEmail.email },
    process.env.TOKENSECRET,
    {
      expiresIn: "1h",
    }
  );

  res.status(200).send({ token });
};
