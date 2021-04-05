const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://webdev5610:webdev5610@kissanime.x2mdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

module.exports = mongoose;