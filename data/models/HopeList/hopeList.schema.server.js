const mongoose = require('mongoose');

const hopeListSchema = mongoose.Schema({
    userId: String,
    animes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'AnimeModel'
    }]
}, {collection: 'hopeLists'});

module.exports = hopeListSchema;