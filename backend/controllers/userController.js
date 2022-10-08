const User = require('../model/userModel')

// signup user
const signupUser = async (req, res) => {
    const {username,email,password,role} = req.body
    
    try{
        const user = await User.signup(username,email,password,role)
        res.status(200).json({user})
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