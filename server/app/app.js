const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan");
const crypto = require("crypto");
const uuid = require("node-uuid");
const fs = require("fs");
const path = require("path");
const connectMongo = require("connect-mongo");

const router = require("../routes/router");
const connect = require("../database/connect");

//load environment configuration file.
require("dotenv").load();

//express application instance
let application;
//mongoose store
let mongoStore;

//initialise middleware
function initMiddleware() {
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: false }));
    application.use('/', express.static(path.join(__dirname, "../public/")));
    application.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        genid: (req) => {
            return crypto.createHash('sha256').update(uuid.v1()).update(crypto.randomBytes(256)).digest("hex");
        }
    }));
}

//initialise logging
function initialiseLogger() {
    let logDirectory = path.join(__dirname, process.env.LOG_FILE_PATH);
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
    let accessLogStream = fs.createWriteStream(
        path.join(logDirectory, process.env.LOG_FILE), {
            flags: 'a'
        });
    application.use(logger('combined', { stream: accessLogStream }))
}

//initialise database
function initDbConnection() {
    mongoStore = connectMongo(session);
    connect(process.env.DATABASE_URL)
        .then(() => console.log('database connected!!'))
        .catch((error) => console.log(error));
}

//IIFE
module.exports = function initialiseApp() {
    application = express();
    initMiddleware();
    initialiseLogger();
    router(application);
    initDbConnection();
    return application;
}