const express = require("express");
const router = express.Router();
const song = require("../models/song");

router.get("/", (req, res) => {
    song.findAll(data => {
        res.render("songs", {songs: data})
    });
});

router.post("/api/song", (req, res) => {
    song.create(req.body, (data) => {
        res.redirect("/");
    });
});

router.put("/api/song/:id", (req, res) => {
    const data = {
        favorite: true
    };
    
    song.update(data, req.params.id, (data) => {
        res.json(data);
    });
});

module.exports = router;