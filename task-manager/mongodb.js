const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('tasks').findOne({completed: true}, (error, task) => {
    //     if (error) {
    //         return console.log('Undable to fetch')
    //     }

    //     console.log(task)
    // })

    db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
        console.log(tasks)
    })

    db.collection('tasks').find({completed: true}).count((error, count) => {
        console.log(count)
    })
})