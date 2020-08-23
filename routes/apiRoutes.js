// LOAD DATA FROM DB.JSON FILE
var notes = require("../db/notes.js");

const router = require("express").Router();
// var dbJSON = require("../db/db.json")



// GET "/api/notes" - READ DB.JSON FILE
router.get("/notes", function(req, res) {
    notes.getNotes()
    .then ((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))
});

// POST "/api/notes" - SAVE NOTE TO BODY, ADD NOTE TO DB. JSON FILE, & RETURN CLIENT TO A NEW NOTE
router.post("/api/notes", function(req,res) {
    notes.writeNotes()
    .then((notes) => res.json(notes))
    .then(writeNote())
    .catch((err) => res.status(500).json(err))
});

// DELETE "/api/notes/:id"
router.delete("/api/notes/:id", function(req, res){
    res.send('DELETE request')
    //create a remove note & call in here
 });

module.exports = router