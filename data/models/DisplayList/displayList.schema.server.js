const mongoose = require('mongoose');

const displayListSchema = mongoose.Schema({
    animes: []
}, {collection: 'displayLists'});

module.exports = displayListSchema;