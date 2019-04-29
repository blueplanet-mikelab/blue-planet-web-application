const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    residence: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: true
    },
})

module.exports = mongoose.model('User', userSchema)