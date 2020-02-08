const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const UserInfo = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const User = Mongoose.model("users", UserInfo);

module.exports = User;