var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function GiftItemStore() {
	var items = [];

	helper.get('/api/items')
	.then(function(data) {
		items = data;
		triggerListeners();
	});

	var listeners = [];

	function getItems() {
		return items;
	}

	function addGiftItem(item) {
		items.push(item);
		triggerListeners();

		helper.post('/api/items', item);
	}

	function deleteGiftItem(item) {
		var index;
		items.filter(function(_item, _index) {
			if(_item.name == item.name) {
				index = _index;
			}
		});
		items.splice(index,1);
		triggerListeners();

		helper.del('/api/items/' + item._id);
	}

	function setGiftItemBought(item, isBought) {
		var _item = items.filter(function(a) {
			return a.name == item.name;
		})[0];
		_item.purchased = isBought || false;
		triggerListeners();	

		helper.patch('/api/items/' + item._id, item);
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function triggerListeners() {
		listeners.forEach(function(listener) {
			listener(items);
		})
	}

	dispatcher.register(function(event) {
		var split = event.type.split(':');
		if(split[0] === 'gift-item') {
			switch(split[1]) {
				case "add":
					addGiftItem(event.payload);
					break;	
				case "delete":
					deleteGiftItem(event.payload);
					break;
				case "buy":
					setGiftItemBought(event.payload, true);
					break;
				case "unbuy":
					setGiftItemBought(event.payload, false);
					break;
			}
		}
	});

	return {
		getItems: getItems,
		onChange: onChange
	}
}

module.exports = new GiftItemStore();