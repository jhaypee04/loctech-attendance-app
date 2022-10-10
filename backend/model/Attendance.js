const mongoose = require('mongoose')

const Attendance = mongoose.model(
    'attendance',
    new mongoose.Schema({
        weekNo: {
            type: Number,
            required: true
        },
        dayOfAttendance: {
            type: String,
            required: true
        },
        checkedName: {
            type: Array,
            required: true
        },
        classname: {
            type: String,
            required: true
        },
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'student'
            }
        ]
    })
)
module.exports = Attendance