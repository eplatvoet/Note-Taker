const fs = require("fs");
const util = require("util");
const uuid = require("uuid/v1");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Note {
    readNotes() {
        return readFileAsync("/db.json", "utf8");
    }
    writeNote(note) {
        return writeFileAsync("/db.json", JSON.stringify(note))
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
    //saveNotes(){
        //
    //}
    //deleteNotes(){
        //
    // }
}

module.exports = new Note();