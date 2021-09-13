const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)


    // db.collection('users').insertOne({
    //     name: 'Hai Tuan',
    //     age: 22,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28,
    //     }, {
    //         name: 'Gunther', 
    //         age: 28,
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.insertedCount)
    // })

    db.collection('tasks').insertMany([
        {
            decription: "mot",
            completed: true,
        }, {
            decription: "hai", 
            completed: false,
        }, {
            decription: "ba", 
            completed: true,
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable connect to server')
        }
        console.log(result.insertedCount)
    })
})