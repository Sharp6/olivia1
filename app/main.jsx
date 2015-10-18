var React = require('react/addons');
var ReactDOM = require('react-dom');

var GiftItemList = require('./components/GiftItemList.jsx');
var giftItemStore = require('./stores/GiftItemStore.jsx');

var initial = giftItemStore.getItems();
function render() {
	ReactDOM.render(<GiftItemList items={initial}/>, app);	
}

giftItemStore.onChange(function(items) {
	initial = items;
	render();
});

render();