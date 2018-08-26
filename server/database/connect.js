const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

module.exports = function connect(url = process.env.DATABASE_URL) {
    return new Promise((resolve, reject) => {
        mongoose.createConnection(url)
            .on("open", () => resolve())
            .on("error", () => reject());
    });
}