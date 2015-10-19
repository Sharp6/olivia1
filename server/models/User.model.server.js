var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	password: String,
	_id: String
});

UserSchema.methods.validPassword = function(_password) {
	if(this.password == _password) {
		return true;
	} else {
		return false;
	}
}

// validPassword = function(password){} ????

var User = mongoose.model('User', UserSchema, 'users');
module.exports = User;