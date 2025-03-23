const { Admin } = require("../models/admin");
const jwt = require("jsonwebtoken");

async function adminAuth(req, res, next) {
  try {
    if (!req.cookies || !req.cookies.authToken)
      return res.send("Unauhtorizeed");

    const verifieduser = jwt.verify(
      req.cookies.adminAuthToken,
      process.env.JWT_ADMIN_SECRET
    );

    if (!verifieduser.id) return res.json({ message: "Unauthorized" });

    req.id = verifieduser.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ message: "some error occurred" });
  }
}

module.exports = adminAuth;
