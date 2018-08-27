const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

module.exports = function connect(url = process.env.DATABASE_URL) {
    return mongoose.connect(url);
}