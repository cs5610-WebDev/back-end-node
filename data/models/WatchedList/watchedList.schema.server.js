const mongoose = require('mongoose');

const watchedListSchema = mongoose.Schema({
    userId: String,
    animes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'AnimeModel'
    }]
}, {collection: 'watchedLists'});

module.exports = watchedListSchema;