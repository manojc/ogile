const { Schema, model } = require("mongoose");
const Db_Constants = require("./db-constants");

const schema = new Schema({

    name: {
        type: Schema.Types.String,
        required: true
    },

    username: {
        type: Schema.Types.String,
        required: true
    },

    email: {
        type: Schema.Types.String,
        required: true
    },

    password: {
        type: Schema.Types.String,
        required: true
    }

});

module.exports = model(Db_Constants.Collections.User, schema);