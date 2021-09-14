require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('61403d89568a5cca75d1af24').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})