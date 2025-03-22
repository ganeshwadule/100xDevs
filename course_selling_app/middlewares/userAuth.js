const jwt = require("jsonwebtoken");

function userAuth(req, res, next) {
  try {
    const Authorization = req.headers.authorization;

    const verifieduser = jwt.verify(Authorization, process.env.JWT_SECRET_KEY);

    if (!verifieduser.email) return res.json({ message: "Unauthorized" });

    req.email = verifieduser.email;

    next();
  } catch (error) {
    // console.log(error)
    res.json({ message: "some error occurred" });
  }
}

module.exports = userAuth;
