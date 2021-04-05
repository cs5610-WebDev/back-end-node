const mongoose = require('mongoose');

const watchedListSchema = require('./watchedList.schema.server');

module.exports = mongoose.model('WatchedListModel', watchedListSchema);