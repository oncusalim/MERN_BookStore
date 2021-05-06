const AuthConrollers = require("../controllers/AuthControllers")
const router = require("express").Router();

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */
router.post("/register", AuthConrollers.register)

/**
 * @route Post /api/auth/login
 * @desc Login endpoint 
 * @access Private
 */
router.post("/login", AuthConrollers.login)

module.exports = router;