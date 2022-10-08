const mongoose = require('mongoose')

const Attendance = mongoose.model(
    'attendance',
    new mongoose.Schema({
        checkedName: {
            type: Array,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        },
        dayOfAttendance: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: true
        },
        classrooms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'classroom'
            }
        ]
    })
)
module.exports = Attendance