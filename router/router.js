const express = require("express")

const router = express.Router()
const AuthRouter = require("./AuthRouter")
const ProfileRouter = require("./ProfileRouter")

//only /api endpoint

// @route  /api/auth
// @desc  /Route for AuthRoute

router.use("/auth", AuthRouter)

router.use("/profile", ProfileRouter)


module.exports = router;