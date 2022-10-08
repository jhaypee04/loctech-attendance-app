const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'})
}

// signup user
const signupUser = async (req, res) => {
    const {username,email,password,role} = req.body

    try{
        const user = await User.signup(username,email,password,role)

        // create a token
        const token = createToken(user._id)
    
        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// login user
const loginUser = (req, res) => {

    try{
        res.status(200).json({message: 'Login'})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }