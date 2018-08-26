const express = require("express");

let router = express.Router();

router.get('/runtime.js', (request, response, next) => {
    response.sendFile("runtime.js", { root: "./ui/dist" });
});

router.get('/polyfills.js', (request, response, next) => {
    response.sendFile("polyfills.js", { root: "./ui/dist" });
});

router.get('/styles.js', (request, response, next) => {
    response.sendFile("styles.js", { root: "./ui/dist" });
});

router.get('/vendor.js', (request, response, next) => {
    response.sendFile("vendor.js", { root: "./ui/dist" });
});

router.get('/main.js', (request, response, next) => {
    response.sendFile("main.js", { root: "./ui/dist" });
});

router.get('**', (request, response, next) => {
    response.sendFile("index.html", { root: "./ui/dist" });
});

module.exports = router;