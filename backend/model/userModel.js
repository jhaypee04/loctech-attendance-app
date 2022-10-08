const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function(username,email,password,role){
    // validation
    if(!username || !email || !password || !role){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({username,email,password: hash,role})
    
    return user
}

// static login method
userSchema.statics.login = async function(email,password,role){
    // validation
    if(!email || !password || !role){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('user', userSchema)