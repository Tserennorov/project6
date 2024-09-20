import { readFileSync, writeFileSync } from "fs";
import bcrypt from "bcryptjs";
import env from "dotenv";
import { v4 as uuid } from "uuid";

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;
  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);
  console.log(result);
  const userID = uuid();

  if (!username || !password || !email) {
    res.send("Invalid inputs");
    return;
  }

  const user = result.users.find((el) => el.email === email);
  if (user) {
    res.status(400).send("iim email bn aa");
    return;
  }
  const hashedpassword = await bcrypt.hash(password, Number(process.env.SALT));

  result.users.push({
    username,
    userID,
    email,
    password: hashedpassword,
  });
  await writeFileSync("./db.json", JSON.stringify(result), "utf-8");

  res.status(200).send("Success");
};
