// requiring packages
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const validator = require('validator')

// require models and schema from modules
const userSchema = require('./userSchema')

// connecting to mongodb with mongoose
const mongodb = process.env.MONGODB || "mongodb://127.0.0.1:27017/loctech_attendance_app"
mongoose.connect(mongodb)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log("failed to connect: ", err)
})

// declare app with express server
const app = express()

// using body-parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// handle all get routes
app.get('/register', (req, res)=>{
    res.status(200).json({test: "Working2"})
})

// handling post from login
app.post('/login', (req, res)=>{
    const loginInfo = req.body
    const email = loginInfo.email
    const password = loginInfo.password

    // console.log(email, password)

    userSchema.findOne({email})
    .then((user)=>{
        // console.log("database password: ", user.password)
        bcrypt.compare(password, user.password, async (err, data)=>{
            if(err){
                console.log(err)
            }
            else{
                const payload = {
                    user: {
                        email: user.email
                    }
                }

                const token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: '3600s'
                })
    
                res.cookie('token', token, {
                    maxAge: 3600 * 1000,
                    httpOnly: false
                })
    
                res.status(200).json({msg: 'successful login'})
            }
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

// handling post from register.js
app.post('/register', async (req, res)=>{
    const registrationDetails = req.body
    const password = registrationDetails.password
    
    // Generating Salt and Hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)

    // pesisting user details to database
    saveRegisterForm()
    async function saveRegisterForm(){
        try{
            const user = new userSchema({
                fullName: registrationDetails.fullName,
                email: registrationDetails.email,
                password: hashedpassword
            })
            await user.save()

            const payload = {
                user: {
                    email: registrationDetails.email
                }
            }

            const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: '3600s'
            })

            res.cookie('token', token, {
                maxAge: 3600 * 1000,
                httpOnly: false
            })

            res.status(200).json({msg: 'successful signup'})
        }
        catch(err){
            console.log(err)
        }
    }
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`App Connected and listening on port 4000 or ${port}`)
})