const mongoose = require('mongoose');

const adminUserSchema = mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    profileName: String,
    profilePicUrl: String,
    userType: String,
    loginStatus: Boolean
}, {collection: 'adminUsers'});

module.exports = adminUserSchema