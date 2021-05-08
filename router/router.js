const express = require("express")

const router = express.Router()
const AuthRouter = require("./AuthRouter")
const ProfileRouter = require("./ProfileRouter")
const BookRouter = require("./BookRouter")
//only /api endpoint

/** 
* @route  /api/auth
* @desc  /Route for AuthRoute
*/
router.use("/auth", AuthRouter)

router.use("/profile", ProfileRouter)

/**
 *  @route  /api/books
 * @desc  /Route for Books
 */
router.use("/books", BookRouter)


module.exports = router;