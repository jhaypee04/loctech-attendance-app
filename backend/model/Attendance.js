const mongoose = require('mongoose')

const Attendance = mongoose.model(
    'attendance',
    new mongoose.Schema({
        weekNo: {
            type: String,
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
        }
    })
)
module.exports = Attendance