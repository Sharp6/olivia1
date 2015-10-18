var dispatcher = require('./../dispatcher.js');

module.exports = {
	add: function(item) {
		dispatcher.dispatch({
			payload: item,
			type: "gift-item:add"
		});
	}, 
	delete: function(item) {
		dispatcher.dispatch({
			payload: item,
			type: "gift-item:delete"
		});
	},
	buy: function(item) {
		dispatcher.dispatch({
			payload: item,
			type: "gift-item:buy"
		});
	},
	unbuy: function(item) {
		dispatcher.dispatch({
			payload: item,
			type: "gift-item:unbuy"
		});
	}
}