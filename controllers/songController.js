const express = require("express");
const router = express.Router();
const song = require("../models/song");

router.get("/", (req, res) => {
    song.findAll(data => {
        //res.json(data);
        res.render("songs", {songs: data})
    });
});

router.post("/api/song", (req, res) => {
    song.create(req.body, (data) => {
        // res.json({
        //     message: "Song Added",
        //     data: data
        // });
        res.redirect("/");
    });
});

module.exports = router;