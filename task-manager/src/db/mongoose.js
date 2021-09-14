const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    }
})

const me = new User({
    name: '   Hai Tuan  ',
    email: 'HAITUAn@goole.com   ',
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    console.log('Error ', error)
})

// const Task = mongoose.model('Task', {
//     decription: {
//         type: String,
//     }, 
//     completed: {
//         type: Boolean,
//     }
// })

// const task = new Task({
//     decription: "Home work",
//     completed: false,
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })