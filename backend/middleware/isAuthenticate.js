import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../utils/constant.js";

const isAuthenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "admin in not authenticated",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "admin access only",
      });
    }
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export default isAuthenticate;
