const mongoose = require('mongoose');

const webUserSchema = require('./webUser.schema.server');

module.exports = mongoose.model('WebUserModel', webUserSchema);