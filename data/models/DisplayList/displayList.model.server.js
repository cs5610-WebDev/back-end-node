const mongoose = require('mongoose');

const displayListSchema = require('./displayList.schema.server');

module.exports = mongoose.model('DisplayListModel', displayListSchema);