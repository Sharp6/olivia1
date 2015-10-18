var React = require('react');
var action = require('./../actions/GiftItemActionCreator.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return { input: "" };
	},
	handleInputName: function(e) {
		
		this.setState({ input: e.target.value});
	},
	addItem: function(e) {
		e.preventDefault();
		//console.log("Adding item!", this.state.input);
		action.add({
			name: this.state.input
		});
		this.setState({
			input: ''
		});
	},
	render: function() {
		return (
			<div className="gift-addItem">
				<form onSubmit={this.addItem}>
					<input value={this.state.input} type="text" onChange={this.handleInputName}/>
					<button>Voeg item toe</button>
				</form>
			</div>
		)
	}
});