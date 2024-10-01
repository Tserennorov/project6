import jwt from "jsonwebtoken";

export const checkedAuth = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];

  const response = jwt.verify(token, process.env.TOKENSECRET);

  res.locals.email = response.email;
  next();
};
