module.exports = function(myRouter) {
	var GiftItem = require('./../models/GiftItem.js');

	myRouter.route('/api/items')
		.get(function(req,res) {
			console.log("Fetching docs");
			GiftItem.find(function(err,doc) {
				res.send(doc);	
			});
		})
		.post(function(req,res) {
			var item = req.body;
			console.log("Adding item", item);
			var giftItem = new GiftItem(item);
			giftItem.save(function(err,doc) {
				res.status(201).send(doc);
			});
		});

	myRouter.route('/api/items/:id')
		.delete(function(req,res) {
			GiftItem.findOne({
				_id: req.params.id
			})
			.remove(function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log("Deleted", req.params.id);
				}
			});
		})
		.patch(function(req,res) {
			GiftItem.findOne({
				_id: req.body._id
			}, function(err,doc) {
				for(var key in req.body) {
					doc[key] = req.body[key];
				}
				doc.save();
				res.status(200).send();
			})
		});

	return myRouter;
} 