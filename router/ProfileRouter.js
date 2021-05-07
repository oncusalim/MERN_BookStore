const router = require("express").Router();
const auth = require("../middleware/authMiddleware")
/**
 * @route Get /api/profile
 * @desc Profile endpoint 
 * @access Private
 */
 router.get("/", auth, (req,res)=>{
     res.send(req.decodedUser.email)
 })

 module.exports = router;