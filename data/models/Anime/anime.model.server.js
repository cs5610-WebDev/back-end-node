const mongoose = require('mongoose');

const animeSchema = require('./anime.schema.server');

module.exports = mongoose.model('AnimeModel', animeSchema);