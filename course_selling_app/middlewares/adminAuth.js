const { Admin } = require("../models/admin");
const jwt = require("jsonwebtoken")

async function adminAuth(req, res, next) {
 try {
     const Authorization = req.headers.authorization;
 
     const verifieduser = jwt.verify(Authorization, process.env.JWT_ADMIN_SECRET);
 
     if (!verifieduser.id) return res.json({ message: "Unauthorized" });
 
     req.id = verifieduser.id;
 
     next();
   } catch (error) {
     console.log(error)
     res.json({ message: "some error occurred" });
   }
}

module.exports = adminAuth;
