var express = require('express');
var parser = require('body-parser');

var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var app = new express();
var db = require('./database.js');

var User = require('./models/User.server.model.js');
var oRouter = express.Router();


// SETUP ===============================================================================
app
.use(express.cookieParser())
.use(parser.json())
.use(parser.urlencoded({extended: false}))
.use(express.static(__dirname + '/../.tmp/'))
.use(express.session({ secret: 'olivia' }));

require('./config/passport.js')(app,passport,LocalStrategy,session,User);

// ROUTES ===============================================================================
oRouter = require('./routes/main.routes.server.js')(oRouter);
oRouter = require('./routes/items.js')(oRouter);

app
.get('/', function(req,res) {
	res.render('./../app/index.ejs', {});
})
.use(oRouter);

// RUNNER ===============================================================================
app
.listen(3131);