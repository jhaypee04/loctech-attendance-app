const mongoose = require('mongoose')

const Weeks = mongoose.model(
    'week',
    new mongoose.Schema({
        weekNo: {
            type: Number,
            required: true
        },
        dayOfModule: {
            type: String,
            required: true
        },
        titleOfModule: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: true
        }
    })
)
module.exports = Weeks