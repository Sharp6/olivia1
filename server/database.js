var mongoose = require('mongoose');
var GiftItem = require('./models/GiftItem.js');

mongoose.connect("mongodb://olivia:rabarber@ds033734.mongolab.com:33734/olivia1", function(err) {
	if(err) {
		console.log(err);
		return;
	}
	console.log("Connected");

	//mongoose.connection.db.dropDatabase();

	var items = [{
		name: "Bal"
	}, {
		name: "Schommelpaard",
		purchased: true
	}, {
		name: "Frietjes"
	}];

	items.forEach(function(item) {
		var _gift = new GiftItem(item)
		//_gift.save();
	});
});