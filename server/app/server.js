const http = require("http");
const debug = require("debug");
const initialiseApp = require("./app");

debug('ts-express:server');

const app = initialiseApp();
const port = process.env.PORT || 3000;
app.set('port', port);

//error handler
function onError(error) {
    if (error.syscall !== 'listen') throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

//listener handler
function onListening() {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
    console.log(`\n\napplication is running on http://localhost:${(typeof addr === 'string') ? addr : addr.port}\n\n`);
}

const server = http.createServer(app)
    .listen(port)
    .on('error', onError)
    .on('listening', onListening);

module.exports = server;