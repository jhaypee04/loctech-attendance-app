const mongoose = require('mongoose')

const Classroom = mongoose.model(
    'classroom',
    new mongoose.Schema({
        classname: {
            type: String,
            required: true
        },
        classdays: {
            type: Array,
            required: true
        },
        classduration: {
            type: Number,
            required: true
        },
        module: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'module'
            }
        ],
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'student'
            }
        ]
    })
)
module.exports = Classroom