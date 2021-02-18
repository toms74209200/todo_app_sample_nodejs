const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get("/", (req,res) => {
    fs.readFile("index.html", {encoding: "utf8"}, (error, data) => {
        if (error) {
            console.error(error);
            res.send(404);
        }
        res.send(data);
    });
});

module.exports = router;