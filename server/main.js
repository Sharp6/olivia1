var express = require('express');
var parser = require('body-parser');

var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var app = new express();
var db = require('./database.js');

var myRouter = express.Router();


app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {  // Places a user in the session
  done(null,user);
}); 
passport.deserializeUser(function(user, done) {
  done(null,user);
});

app
.use(parser.json())
.use(parser.urlencoded({extended: false}))
.use(express.static(__dirname + '/../.tmp/'))
.get('/', function(req,res) {
	res.render('./../app/index.ejs', {});
})
.use(require('./routes/items.js')(myRouter))
.listen(3131);