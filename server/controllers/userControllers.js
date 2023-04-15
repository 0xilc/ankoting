const asyncErrorHandler = require("express-async-handler")
const User = require('../models/userModel')
const generateToken = require('../config/generateToken')



const registerUser = asyncErrorHandler(async (req,res) => {
    const { username, password } = req.body
    
    // check errors
    if (!username || !password)
    {
        res.status(400);
        throw new Error("Enter missing fields!")
    }

    const userExists = await User.findOne({ username })
    if (userExists) 
    {
        res.status(400);
        throw new Error("This username is taken")
    }

    // otherwise create a new user
    const user = await User.create({
        username,
        password
    })
    if (user) 
    {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id)
        })
    }
    else
    {
        res.status(400)
        throw new Error("Failed to create the user")
    }
})


const authUser = asyncErrorHandler(async (req,res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username })

    if (user && await user.checkPassword(password))
    {
        res.json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id),
        })
    }
    else
    {
        res.status(401);
        throw new Error("Invalid credentials")
    }
})


module.exports = { registerUser, authUser }