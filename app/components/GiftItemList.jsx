var React = require('react');
var GiftItem = require('./GiftItem.jsx');
var GiftListAddItem = require('./GiftListAddItem.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Olivia 1 jaar!</h1>
				<div>
					{
						this.props.items.map(function(item, index) {
							return (
								<GiftItem item={item} key={"item"+index} />
							)
						})
					}
				</div>
				<GiftListAddItem />
			</div>
		)
	}
});