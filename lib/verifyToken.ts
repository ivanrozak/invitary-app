import { verify } from "jsonwebtoken";

export default function verifyToken(req: Request) {
  const token = req.headers.get("authorization");
  if (!token) {
    return false;
  }

  try {
    const SECRET = process.env.JWT_SECRET || "DEV";
    const decodedToken = verify(token, SECRET);
    return decodedToken;
  } catch (error) {
    return false;
  }
}
