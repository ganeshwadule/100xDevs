const jwt = require("jsonwebtoken");

function userAuth(req, res, next) {
  try {
    // const Authorization = req.headers.authorization;
    if(!req.cookies || !req.cookies.authToken)
      return res.send("Unauhtorizeed")

    const verifieduser = jwt.verify(req.cookies.userAuthToken, process.env.JWT_USER_SECRET);

    if (!verifieduser.id) return res.json({ message: "Unauthorized" });

    req.id = verifieduser.id;

    next();
  } catch (error) {
    console.log(error)
    res.json({ message: "some error occurred" });
  }
}

module.exports = userAuth;
