const http = require("http");
const router = require("./router");

// initialise http server
const server = http
    .createServer((req, res) => router(req, res, (req, res) => { }))
    .on("error", (error) => console.log(`HTTP Server - ${error.stack}`))
    .listen(3000, () => console.log(`service started!`));

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