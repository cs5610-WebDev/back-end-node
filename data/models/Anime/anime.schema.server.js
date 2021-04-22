const mongoose = require('mongoose');

const animeSchema = mongoose.Schema({
    _id: String,
    title: String,
    postUrl: String,
    watchedUsers: []
}, {collection: 'anime'});

module.exports = animeSchema