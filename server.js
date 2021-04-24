const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser');
cors = require('cors')
require('dotenv').config()

// Connect with DB
require('./data/db');

app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'currentUser',
    cookie: {
        maxAge: 1000 * 60 * 3000
    }
}));

console.log(process.env.FRONT_END);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configure CORS
app.use(cors({credentials: true, origin: process.env.FRONT_END}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.FRONT_END);
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/user.controller.server')(app);
require('./controllers/anime.controller.server')(app);
require('./controllers/hopeList.controller.server')(app);
require('./controllers/admin.controller.server')(app);
require('./controllers/watchedList.controller.server')(app);
require('./controllers/watchingList.controller.server')(app);
require('./controllers/displayList.controller.server')(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'api.server.html')
});

app.listen(process.env.PORT || 4000);
