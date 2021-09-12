const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

console.log(getNotes())
console.log(validator.isURL('haituan134.com'))
console.log(chalk.green.inverse.bold('Success!'))