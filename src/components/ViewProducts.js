var React = require('react');
var Actions = require('../actions/ProductActions');
var ProductStore = require('../stores/ProductStore');

var ViewProducts = React.createClass({
	getInitialState: function(){
		return {
			products: ProductStore.getAll()
		}
	},
	componentDidMount: function(){
		ProductStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		ProductStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		var products = ProductStore.getAll();
		this.setState({
			products: products
		});
	},
	_renderProducts: function(){
		var allProducts = this.state.products;
		var products = [];
		for(var key in allProducts){
			products.push(
				<div className="form-group" key={key}>
					<label className="form-control" key={key}>
						{allProducts[key].name}
					</label>
				</div>);
		}
		return products;
	},
	render: function(){
		var products = this._renderProducts();
		return (<div className="col-sm-4">
				{products}
			</div>);
	}
});


module.exports = ViewProducts;