module.exports = function(app,passport,LocalStrategy,session,User) {

  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(function(user, done) {  // Places a user in the session
    done(null,user);
  }); 
  passport.deserializeUser(function(user, done) {
    done(null,user);
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err,user) {
        if(err) { return done(err); }
        if(!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if(!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password. '});
        }

        return done(null, user);
      });
  	}
  ));
}