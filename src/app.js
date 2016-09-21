var React = require('react');
var Sample = require('./components/sample');
var Products = require('./components/Products');
var ViewProducts = require('./components/ViewProducts');
var ProductForm = require('./components/ProductForm');

var App = React.createClass({
	render: function(){
		return (
			<div className="container-fluid">
				<div className="row">
					<Products />
					<ViewProducts />
					<div className="col-sm-6">
						<ProductForm/>
					</div>
				</div>
			</div>);
	}
});

module.exports = App;