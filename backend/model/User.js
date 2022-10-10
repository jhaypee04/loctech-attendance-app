const mongoose = require('mongoose')

const User = mongoose.model(
    'user',
    new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        classrooms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'classroom'
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

module.exports = User