import { Request, Response, NextFunction, Router } from "express";
import * as path from 'path';

let router = Router();

router.get('/runtime.js', (request, response, next) => {
    response.sendFile("runtime.js", { root: "./dist/public" });
});

router.get('/polyfills.js', (request, response, next) => {
    response.sendFile("polyfills.js", { root: "./dist/public" });
});

router.get('/styles.js', (request, response, next) => {
    response.sendFile("styles.js", { root: "./dist/public" });
});

router.get('/vendor.js', (request, response, next) => {
    response.sendFile("vendor.js", { root: "./dist/public" });
});

router.get('/main.js', (request, response, next) => {
    response.sendFile("main.js", { root: "./dist/public" });
});

router.get('**', (request, response, next) => {
    response.sendFile("index.html", { root: "./dist/public" });
});

export let indexRoute: Router = router;