import { readFileSync, writeFileSync } from "fs";
import bcrypt from "bcryptjs";
import env from "dotenv";
import { v4 as uuid } from "uuid";
import { sql } from "../../database/index.js";

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  const userid = uuid();

  if (!username || !password || !email) {
    res.send("Invalid inputs");
    return;
  }

  // const user = result.users.find((el) => el.email === email);
  const user = await sql`SELECT * FROM users WHERE email=${email}`;

  if (user.length > 0) {
    res.status(400).send("iim email bn aa");
    return;
  }
  const hashedpassword = await bcrypt.hash(password, Number(process.env.SALT));

  // result.users.push({
  //   username,
  //   userID,
  //   email,
  //   password: hashedpassword,
  // });
  // await writeFileSync("./db.json", JSON.stringify(result), "utf-8");

  const createdat = new Date();
  const updatedat = new Date();

  const newUser =
    await sql`INSERT INTO users(email,userid,username,password,createdat,updatedat) VALUES(${email},${userid},${username},${hashedpassword},${createdat},${updatedat})`;
  console.log(newUser);

  res.status(200).send("Success");
};
