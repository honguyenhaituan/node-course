const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
    },
    age: {
        type: Number,
    }
})

// const me = new User({
//     name: 'Hai Tuan',
//     age: "Mike",
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error ', error)
// })

const Task = mongoose.model('Task', {
    decription: {
        type: String,
    }, 
    completed: {
        type: Boolean,
    }
})

const task = new Task({
    decription: "Home work",
    completed: false,
})

task.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})