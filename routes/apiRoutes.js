// LOAD DATA FROM DB.JSON
var notes = require("../db/notes.js");

module.exports = function(app) {

// GET "/api/notes" - read db.json file

app.get("/notes", function(req, res) {
    notes.getNotes()
    .then ((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))

// POST "/api/notes" - save note to body, add note to db.json, and return client to new note

// DELETE "/api/notes/:id" - find way to give each note a unique id, so that note can be removed & db.json is rewriten
}