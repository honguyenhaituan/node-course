const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.port || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('614300245a3f33dfb4f557a0')
    // await task.populate('owner')
    // console.log(task.owner)

    const user = await User.findById('6142ff62d397b0c222455590')
    await user.populate('tasks')
    console.log(user.tasks)
}

main()
