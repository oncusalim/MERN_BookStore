const AuthConrollers = require("../controllers/AuthControllers")
const router = require("express").Router();
const validations = require("../middleware/validationMiddleware");
/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */
router.post(
    "/register", 
    validations.emailPasswordValidation,
    AuthConrollers.register)

/**
 * @route Post /api/auth/login
 * @desc Login endpoint 
 * @access Public
 */
router.post("/login", 
validations.emailPasswordValidation,
AuthConrollers.login)

module.exports = router;