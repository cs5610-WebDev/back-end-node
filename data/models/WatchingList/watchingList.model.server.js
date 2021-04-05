const mongoose = require('mongoose');

const watchingListSchema = require('./watchingList.schema.server');

module.exports = mongoose.model('WatchingListModel', watchingListSchema);