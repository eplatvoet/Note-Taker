const fs = require("fs");
const util = require("util");

const uuid = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Note {
    readNotes() {
        return readFileAsync("db/db.json", "utf8");
    }
    writeNote(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes() {
        return this.readNotes()
        .then((notes) => {
            let parseNotes;
            try {
                parseNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parseNotes = []
            }
        return parseNotes
        })
    }
    saveNotes(note) {
        const {title, text} = note
        const newNote = { title, text, id: uuid() }
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.writeNote(updatedNotes))
        .then(() => newNote)
    }
    deleteNotes(id){
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then ((filteredNotes) => this.writeNote(filteredNotes));
        }
}

module.exports = new Note();