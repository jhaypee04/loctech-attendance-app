const validator = require('validator')
const bcrypt = require('bcrypt')
const model = require('../model')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'})
}
// signup function
const signup = async function(username,email,password,role){
    // validation
    if(!username || !email || !password || !role){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password must be 8 and above characters and contain an Uppercase, a lowercase and a Symbol!')
    }
    
    const exists = await model.User.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await model.User.create({username,email,password: hash,role})
    
    return user
}

// login function
const login = async function(email,password,role){
    // validation
    if(!email || !password || !role){
        throw Error('All fields must be filled')
    }

    const user = await model.User.findOne({email})
    if(!user){
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Password must be 8 and above characters and contain an Uppercase, a lowercase and a Symbol!')
    }

    return user
}

// signup user
const signupUser = async (req, res) => {
    const {username,email,password,role} = req.body
    try{
        const user = await signup(username,email,password,role)
        // create a token
        const token = createToken(user._id)
        res.status(200).json({username,email,token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// login user
const loginUser = async (req, res) => {
    const {email,password,role} = req.body
    try{
        const user = await login(email,password,role)
        // create a token
        const token = createToken(user._id)
        const username = user.username
        res.status(200).json({username,email,token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }