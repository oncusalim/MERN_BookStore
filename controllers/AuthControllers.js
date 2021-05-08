const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken")


exports.register = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    //TODO1: validate the fields
    const validationErr = validationResult(req);
    if (validationErr?.errors?.length > 0) {
        return res.status(400).json({errors: validationErr.array() })
    }

    console.log("validationErr", validationErr)
    
    //TODO2: check already registered
    const userData = await User.findOne({ email })
    console.log("userData", userData)
    if (userData) {
        return res.status(400).json({ errors: [{ message: "bu kayıt zaten mevcut" }] })
    }

    //TODO3: Crypt password
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    //TODO4: saved the user to DB
    const data = new User({
        firstName,
        lastName,
        email,
        password: newPassword //crypted password
    })
    await data.save();

    //TODO: Error handling for saving

    res.send("register complated")
}

exports.login = async(req, res) => {
    const { email, password } = req.body;

    //TODO1 : field validation
    const validationErr = validationResult(req);
    if (validationErr?.errors?.length > 0) {
        return res.status(400).json({errors: validationErr.array() })
    }

    //TODO2 : user exist?
    const userData = await User.findOne({ email })
    console.log("userData", userData)
    if (!userData) {
        return res.status(400).json({ errors: [{ message: "user doesn't exists!" }] })
    }

    //TODO3 : password compare
    const isPAsswordmatch = await bcrypt.compare(password, userData.password);
    if (!isPAsswordmatch) {
        return res.status(400).json({ errors: [{ message: "password  not match" }] })
    }
    
    //TODO4 : return JSON WEB TOKEN--JWT------ //zaman sn cinsinden veya '1h'=3600
    jwt.sign({userData}, process.env.JWT_SECRET_KEY, 
        {expiresIn:'1h' }, (err, token)=>{
            if (err) {
                return res.status(400).json({ errors: [{ message: "Unknown Error" }] })
            }
        
            res.status(202).json({token})
        } )  

    
}