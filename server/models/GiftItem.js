var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GiftItemSchema = new Schema({
	name: String,
	purchased: Boolean,
	id: String
});

var GiftItem = mongoose.model('GiftItem', GiftItemSchema, 'giftItems');
module.exports = GiftItem;