const mongoose = require('mongoose');

const animeSchema = mongoose.Schema({
    _id: String,
    title: String,
    postUrl: String,
}, {collection: 'anime'});

module.exports = animeSchema