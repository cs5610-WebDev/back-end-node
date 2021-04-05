const mongoose = require('mongoose');

const animeSchema = mongoose.Schema({
    title: String,
    postUrl: String,
}, {collection: 'anime'});

module.exports = animeSchema