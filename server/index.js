require("dotenv").config();
const mongoose = require("mongoose");
const http = require("http");
const router = require("./routes/index-router");

// initialise http server
const server = http
    .createServer(async (req, res) => router(req, res, (req, res) => { }))
    .on("error", (error) => console.log(`HTTP Server - ${error.stack}`))
    .listen(process.env.PORT, () => console.log(`service started!`));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log("database connected!"))
    .catch((error) => console.log(error.stack));

// unhandled promise rejection handler
process.on("unhandledRejection", (reason, promise) => {
    console.log(`UnhandledRejection -> Promise - ${promise} ,  Reason - ${reason}`);
});

// uncaught application exception handler
process.on("uncaughtException", (error) => {
    logger.log(`UncaughtException -> ${error.stack}`);
    process.exit(1);
});

module.exports = server;