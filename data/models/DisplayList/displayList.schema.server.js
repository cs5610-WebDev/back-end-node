const mongoose = require('mongoose');

const displayListSchema = mongoose.Schema({
    animes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'AnimeModel'
    }]
}, {collection: 'displayLists'});

module.exports = displayListSchema;