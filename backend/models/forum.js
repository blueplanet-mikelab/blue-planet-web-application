const mongoose = require('mongoose')
const Schema = mongoose.Schema

var forumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: true
    },
    country: {
        type: Array,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Forum', forumSchema)