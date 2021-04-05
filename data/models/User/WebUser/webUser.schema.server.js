const mongoose = require('mongoose');

const webUserSchema = mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    profileName: String,
    profilePicUrl: String,
    userType: String,
    loginStatus: Boolean
}, {collection: 'webUsers'});

module.exports = webUserSchema