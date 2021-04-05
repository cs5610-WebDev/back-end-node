const mongoose = require('mongoose');

const adminUserSchema = require('./adminUser.schema.server');

module.exports = mongoose.model('AdminUserModel', adminUserSchema);