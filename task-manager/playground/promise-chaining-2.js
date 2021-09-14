require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61403d89568a5cca75d1af24').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('61403d89568a5cca75d1af24').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})