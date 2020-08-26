// LOAD DATA FROM DB.JSON FILE
const notes = require("../db/notes");
const router = require("express").Router();


// GET "/api/notes" - READ DB.JSON FILE
router.get("api/notes", (req, res) => {
    notes.getNotes()
    .then ((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))
});

// POST "/api/notes" - SAVE NOTE TO BODY, ADD NOTE TO DB. JSON FILE, & RETURN CLIENT TO A NEW NOTE
router.post("/notes", (req,res) => {
    notes
    .saveNotes(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))
});

// DELETE "/api/notes/:id"
router.delete("/notes/:id",(req, res) => {
    notes
    .deleteNotes()
    .then ((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))
});

module.exports = router