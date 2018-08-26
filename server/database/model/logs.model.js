const mongoose = require("mongoose");
const DbSchema = require("./db.constants");

const LogSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: [true, "session id is required"]
    },
    method: {
        type: String,
        required: [true, "API method is required"],
        validate: {
            validator: (value) => {
                let verbs = ["GET", "POST", "PUT", "HEAD", "DELETE", "PATCH", "OPTIONS"];
                return verbs.indexOf(value.trim().toUpperCase()) > -1;
            },
            message: "invalid HTTP verb"
        }
    },
    url: {
        type: String,
        required: [true, "API Url is required"]
    },
    request: {
        type: Object
    },
    response: {
        type: Object
    },
    metadata: {
        type: Object
    }
}, { timestamps: true, versionKey: false, id: true })

module.exports = mongoose.model(DbSchema.Collections.Logs, LogSchema);