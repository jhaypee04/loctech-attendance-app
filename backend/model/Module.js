const mongoose = require('mongoose')

const Module = mongoose.model(
    'module',
    new mongoose.Schema({
        weekNo: {
            type: String,
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
        classname: {
            type: String,
            required: true
        }
    })
)
module.exports = Module