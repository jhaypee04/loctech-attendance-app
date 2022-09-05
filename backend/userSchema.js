const mongoose = require('mongoose')

const mongodb = process.env.MONGODB || "mongodb://127.0.0.1:27017/loctech_attendance_app"
mongoose.connect(mongodb)

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)