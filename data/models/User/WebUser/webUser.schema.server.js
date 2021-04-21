const mongoose = require('mongoose');

const webUserSchema = mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    profileName: String,
    profilePicUrl: String,
    userType: String,
    animeList: []
}, {collection: 'webUsers'});

module.exports = webUserSchema