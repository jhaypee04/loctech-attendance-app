// requiring packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')

const app = express()

// middlewares
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/loctech/user', userRoutes)

const port = process.env.PORT
const mongodb = process.env.MONGODB_URI
mongoose.connect(mongodb)
.then(()=>{
    // listen for request
    app.listen(port,()=>{
        console.log(`Connected to db and listening on port ${port}`)
    })
})
.catch((err)=>{console.log(err)})
