const mongoose = require('mongoose');

const watchingListSchema = mongoose.Schema({
    userId: String,
    animes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'AnimeModel'
    }]
}, {collection: 'watchingList'});

module.exports = watchingListSchema