const mongoose = require('mongoose');

const displayListSchema = mongoose.Schema({
    // _id: String,
    // title: String,
    // poster: String
    anime: {
        type: String,
        ref: "AnimeModel"
    },
    //
}, {collection: 'displayLists'});

module.exports = displayListSchema;