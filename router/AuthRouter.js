const AuthConrollers = require("../controllers/AuthControllers")
const router = require("express").Router();
const { check } = require("express-validator")
/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */
router.post(
    "/register", 
    [ 
        check("password", "Please enter a password with 6 and more chars").isLength(
            {
                min: 6,
            }
        ),
        check("email", "Please enter valid email!").isEmail(),
    ], 
    AuthConrollers.register)

/**
 * @route Post /api/auth/login
 * @desc Login endpoint 
 * @access Private
 */
router.post("/login", AuthConrollers.login)

module.exports = router;