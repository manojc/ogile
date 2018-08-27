const mongoose = require("mongoose");
const DbSchema = require("./db.constants");

const UserSchema = new mongoose.Schema({

    name: {
        type: mongoose.Schema.Types.String,
        required: [true, 'name is required']
    },

    username: {
        type: mongoose.Schema.Types.String,
        required: [true, 'user name is required']
    },

    email: {
        type: mongoose.Schema.Types.String,
        validate: {
            validator: function (v) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(v);
            },
            message: '{VALUE} is not a valid email id!'
        },
        required: [true, 'email id is required']
    },

    city: {
        type: mongoose.Schema.Types.String,
        required: [true, "city is required"]
    },

    password: {
        type: mongoose.Schema.Types.String,
        required: [true, 'password is required']
    },

    isAdmin: {
        type: mongoose.Schema.Types.Boolean
    },

    additionalInfo: {
        type: mongoose.Schema.Types.Array,
    },
}, { timestamps: true, versionKey: false, id: true });


UserSchema.statics.updateUser = function (user) {
    return this.findByIdAndUpdate(user._id, user, { upsert: true, new: true });
}

module.exports = mongoose.model(DbSchema.Collections.Users, UserSchema);