const mongoose = require('mongoose');

const hopeListSchema = require('./hopeList.schema.server');

module.exports = mongoose.model('HopeListModel', hopeListSchema);