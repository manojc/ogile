import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as crypto from "crypto";
import * as uuid from "node-uuid";
import * as fs from 'fs';
import * as path from 'path';
import * as connectMongo from 'connect-mongo';
import { initialiseRouter } from '../routes/router';
import { connect } from "../database/connect";
import * as dotenv from "dotenv";

//load environment configuration file.
dotenv.load();

//express application instance
let application: express.Application;
//mongoose store
let mongoStore: connectMongo.MongoStoreFactory;

//initialise middleware
function initMiddleware(): void {
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: false }));
    application.use('/', express.static(path.join(__dirname, "../public/")));
    application.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        genid: (req: express.Request) => {
            return crypto.createHash('sha256').update(uuid.v1()).update(crypto.randomBytes(256)).digest("hex");
        }
    }));
}

//initialise logging
function initialiseLogger() {
    let logDirectory: string = path.join(__dirname, process.env.LOG_FILE_PATH);
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
    let accessLogStream: fs.WriteStream = fs.createWriteStream(
        path.join(logDirectory, process.env.LOG_FILE), {
            flags: 'a'
        });
    application.use(logger('combined', { stream: accessLogStream }))
}

//initialise database
function initDbConnection(): void {
    mongoStore = connectMongo(session);
    connect(process.env.MONGO_URL)
        .then(() => console.log('database connected!!'))
        .catch((error: any) => console.log(error));
}

//IIFE
(() => {
    application = express();
    initMiddleware();
    initialiseLogger();
    initialiseRouter(application);
    initDbConnection();
})();

export const app: express.Application = application;