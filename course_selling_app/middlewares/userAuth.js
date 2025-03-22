const jwt = require("jsonwebtoken");

function userAuth(req, res, next) {
  try {
    const Authorization = req.headers.authorization;

    const verifieduser = jwt.verify(Authorization, process.env.JWT_USER_SECRET);

    if (!verifieduser.id) return res.json({ message: "Unauthorized" });

    req.id = verifieduser.id;

    next();
  } catch (error) {
    // console.log(error)
    res.json({ message: "some error occurred" });
  }
}

module.exports = userAuth;
