const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return "Your notes..."
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicatedNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicatedNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
    
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesRemain = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length !== notesRemain.length) {
        saveNotes(notesRemain)
        console.log(chalk.green('Note removed!'))
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote,
}