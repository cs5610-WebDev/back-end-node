const mongoose = require('mongoose');

const watchingListSchema = mongoose.Schema({
    userId: String,
    animes: [{
        type: String,
        ref: 'AnimeModel'
    }]
}, {collection: 'watchingList'});

module.exports = watchingListSchema;