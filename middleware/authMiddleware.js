const jwt = require("jsonwebtoken");
const { isBuffer } = require("lodash");

const authMiddleware = (req, res, next)=>{

//TODO1: get Token
const token = req.header("token")

//TODO2: Return error if token doesn't exist
if (!token) {
    return res.status(401).json({msg: "invalid token"}) //401 not authorized
}
console.log("token", token);

//TODO3: verify token

jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken)=>{
    if(err){
        return res.status(401).json({msg: "invalid token"}) //401 not authorized
    } else {
        req.decodedUser = decodedToken.userData
        next()
    }
})

}

module.exports = authMiddleware