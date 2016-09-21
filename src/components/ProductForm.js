var React = require('react');
var Actions = require('../actions/ProductActions');

var ProductForm = React.createClass({
	getInitialState: function(){
		return {
			productName: '',
			productPrice: 0
		}
	},
	_submitForm: function(e){
		e.preventDefault();
		Actions.create({
			name: this.state.productName,
			price: this.state.productPrice
		});
		this._resetState();
	},
	_resetState: function(){
		this.setState({
			productName: '',
			productPrice: 0
		});
	},
	_updateName: function(e){
		var productName = e.target.value;
		this.setState({
			productName: productName
		});
	},
	_updatePrice: function(e){
		var productPrice = e.target.value;
		this.setState({
			productPrice: productPrice
		});
	},
	_renderForm: function(){
		return (
			<form className="form-horizontal" onSubmit={this._submitForm}>
				<div formName="form-group">
					<label for="name">Name</label>
					<input className="form-control" type="text" value={this.state.productName} onChange={this._updateName}/>
				</div>
				<div formName="form-group">
					<label for="name">Price</label>
					<input className="form-control" type="text" value={this.state.productPrice} onChange={this._updatePrice}/>
				</div>
				<div formName="form-group">
					<button className="btn btn-success" type="submit">Create</button>
				</div>
			</form>
		);
	},
	render: function(){
		return this._renderForm();
	}
});


module.exports = ProductForm;