const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Creat add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function() {
        console.log('Listing the note')
    }
})

yargs.parse()