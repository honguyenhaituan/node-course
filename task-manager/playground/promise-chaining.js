require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('6140432bdcb65bedefd8ae8f', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
