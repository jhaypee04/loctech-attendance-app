const mongoose = require('mongoose')

const Students = mongoose.model(
    'student',
    new mongoose.Schema({
        studentName: {
            type: String,
            required: true
        },
        studentEmail: {
            type: String,
            required: true
        },
        parentEmail: {
            type: String,
            required: true
        },
        parentPhoneNo: {
            type: Number,
            required: true
        },
        studentPhoneNo: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        className: {
            type: String,
            required: true
        },
        attendances: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'attendance'
            }
        ]
    })
)
module.exports = Students