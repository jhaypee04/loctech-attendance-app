// requiring packages
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')
const cors = require('cors')

// models
const db = require('./model/index')


// connecting to mongodb with mongoose
const mongodb = process.env.MONGODB || "mongodb://127.0.0.1:27017/loctech_attendance_app"
mongoose.connect(mongodb)
    .then(()=>console.log("database connected"))
    .catch((err)=>{console.log("failed to connect: ", err)})

// Express app
const app = express()

// middlewares
app.use(cors({origin: 'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// handle the get routes
app.get('/register', (req, res)=>{
    res.status(200).json({test: "Msg from server saying; Register route is Working"})
})
app.get('/login', (req, res)=>{
    res.status(200).json({test: "Msg from server saying; login route is Working"})
})
app.get('/homepage', async(req, res)=>{
    console.log('Hello llllllllllllll')
    // res.status(200).json({test: "Msg from server saying; homepage route is Working"})
})
app.post('/homepage', async(req, res)=>{
    console.log('Hello llllllllllllll')
    console.log("token"+ req.body.token)
    // res.status(200).json({test: "Msg from server saying; homepage route is Working"})
})

// handling the post routes
app.post('/register', async (req, res)=>{
    const instructorNameFromUI = req.body.instructorName
    const instructorEmailFromUI = req.body.email
    const instructorPasswordFromUI = req.body.password

    console.log(req.body)

    // Salting the password
    const saltNo = 10
    const genSalt = await bcrypt.genSalt(saltNo)
    const hashedPassword = await bcrypt.hash(instructorPasswordFromUI, genSalt)

    // Persisting to db
    saveToInstructor(instructorNameFromUI,instructorEmailFromUI,hashedPassword)

    // jwt/token
    const token = await makeToken(InstructorEmailFromDB)
    console.log(token)

    // Data to send back
    const data = {
        message: "Msg from server saying; Instructor was successfully registered ",
        token,
        instructorNameFromUI,
        instructorEmailFromUI
    }

    res.status(200).json(data)

})
app.post('/login', (req, res)=>{
    const instructorEmailFromUI = req.body.email
    const instructorPasswordFromUI = req.body.password
    
    console.log(instructorEmailFromUI,instructorPasswordFromUI)
    // retrieving password from db
    db.Instructors.findOne({ instructorEmail: instructorEmailFromUI })
        .then((instructor)=>{
            const InstructorEmailFromDB = instructor.instructorEmail
            const InstructorPasswordFromDB = instructor.instructorPassword
            // comparing password from frontend with backend
            bcrypt.compare(instructorPasswordFromUI, InstructorPasswordFromDB, async (err, data)=>{
                const state = data
                const error = err
                if(error){console.log(error)}
                if(state){
                    console.log("Login Details are: ", state)
                    const token = await makeToken(InstructorEmailFromDB)
                    console.log(token)
                    // make httpOnly:true later
                    // need to send to react!
                    // res.cookie('token', token, {httpOnly: false})
                                    // Read operations
                    const getClassrooms = await getInstructor(InstructorEmailFromDB, 'classrooms')
                    // Accessing data from database
                    const instructorName = getClassrooms.instructorName
                    const className = getClassrooms.classrooms
                    console.log(`instructorName:  ${instructorName}  className: ${className}`)

                    // Data to send back
                    const data = {
                        message: "Msg from server saying; Instructor was logged in successfully!",
                        token,
                        instructorName,
                        className,
                    }

                    res.status(200).json(data)
                }
                else{
                    console.log('Wrong Password')

                    // Learn how to send errors to frontend

                }
            })
        })
        .catch((err)=>{
            console.log(err)
        })
})

// jwt
const secretKey = 'Thisisatest'
async function makeToken(emailFromUI){
    const secretKey = 'Thisisatest'
    const payload = {
        instructor: {
            email: emailFromUI
        }
    }
    const token = await jwt.sign(payload,secretKey,{expiresIn: '3600s'})
    return token
}

// protecting routes
function protectRoute(req, res, next){
    const token = req.cookies.token
    console.log(`Token: ${req.cookies.token}`)
    try{
        req.user = jwt.verify(token,secretKey)
        // const instructorEmail =  req.user.instructor.email
        console.log("instructorEmail in protectRoute: " ,instructorEmail)
        next()
    }
    catch(err){
        console.log('Error in protectRoute: ', err)
        res.clearCookie('token')
        return res.redirect('/')
    }
}

// Create operation
const createInstructor = function(instructor){
    return db.Instructors.create(instructor)
        .then(docInstructors=>{
            // console.log("\n>>Created Instructor: \n", docInstructors)
            return docInstructors
        })
}

// Create operation- Schema Construct
const saveToInstructor = async function(instructorName,instructorEmail,instructorPassword){
    const Instructor = await createInstructor({
        instructorName,
        instructorEmail,
        instructorPassword,
        classroom: [],
        students: [],
        attendance: []
    })
    // console.log("\n>>Created Instructor:\n", Instructor)
}

// Read and populate operations
function getInstructor(instructorEmail, collectionName){
    return db.Instructors.findOne({instructorEmail})
    .populate(collectionName, "-_id -__v")
    .then((instructor)=>{
        // console.log("result: "+instructor)
        return instructor
    }).catch((err)=>{
        console.log("err: "+err)
    })
}

// PORT
const port = process.env.PORT || 4000
// Listening to PORT
app.listen(port,()=>{
    console.log(`App Connected and listening on port 4000 or ${port}`)
})