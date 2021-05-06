const express = require("express")

const router = express.Router()
const AuthRouter = require("./AuthRouter")

//only /api endpoint

// @route  /api/auth
// @desc  /Route for AuthRoute

router.use("/auth", AuthRouter)


module.exports = router;