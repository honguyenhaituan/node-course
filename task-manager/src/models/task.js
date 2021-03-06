const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    decription: {
        type: String,
        required: true,
        trim: true,
    }, 
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
})

module.exports = Task