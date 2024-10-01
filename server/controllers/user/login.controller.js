import fs, { readFileSync } from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import env from "dotenv";
import { sql } from "../../database/index.js";
env.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  // const findEmail = result.users.find((el) => el.email == email);

  const findEmail = await sql`SELECT * FROM users WHERE email=${email}`;

  if (!findEmail.length) {
    res.status(400).send("Email wrong");
    return;
  }

  const isMatch = await bcrypt.compareSync(password, findEmail[0].password);

  if (!isMatch) {
    res.status(400).send("password is not match");
    return;
  }

  const token = jwt.sign(
    { userId: findEmail[0].userId, email: findEmail[0].email },
    process.env.TOKENSECRET,
    {
      expiresIn: "1h",
    }
  );

  res.status(200).send({ token });
};
