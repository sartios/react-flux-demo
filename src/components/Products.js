var React = require('react');
var Actions = require('../actions/ProductActions');
var ProductStore = require('../stores/ProductStore');


var Products = React.createClass({
	getInitialState: function(){
		return {
			products: ProductStore.getAll()
		};
	},
	componentDidMount: function(){
		ProductStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		ProductStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState({
			products: ProductStore.getAll()
		});
	},
	_getRenderedProducts: function(){
		var allProducts = this.state.products;
		var products = [];
		for(var key in allProducts){
			products.push(<div><label>{allProducts[key].name}</label></div>);
		}
		return products;
	},
	_generateSample: function(){
		Actions.create({
			name: 'sample product ' + (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
		});
	},
	render: function(){
		var products = this._getRenderedProducts();
		return (
			<div>
				<div>
					{products}	
				</div>
				<button value='generate' onClick={this._generateSample}>Generate</button>
			</div>)

	}
});


module.exports = Products;