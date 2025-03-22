const { Admin } = require("../models/admin");

async function adminAuth(req, res, next) {
  try {
    const { email } = req;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res
        .status(403)
        .json({ message: "You are not an admin to perform this activity" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "some error occurred" });
  }
}

module.exports = adminAuth;
