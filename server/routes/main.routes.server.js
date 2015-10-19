module.exports = function(myRouter) {

	myRouter.route('/login')
		.post(passport.authenticate('local', {successRedirect: '/list', failureRedirect: '/login'}));

	return myRouter;
}