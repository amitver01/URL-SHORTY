import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // console.log("Incoming cookies:", req.cookies);
  // console.log("Authorization header:", req.headers.authorization);

  // Try to get token from cookies first, then from Authorization header
  let token = req.cookies.token;

  if (!token && req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7); // Remove 'Bearer ' prefix
    }
  }

  if (!token) {
    //nsole.log("No token found in cookies or Authorization header");
    req.user = null;
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    //console.log("Token verified successfully for user:", decoded.id);
    next();
  } catch (err) {
    console.log("Token invalid:", err.message);
    req.user = null;
    return res.status(403).json({ message: "Invalid token" });
  }
};
