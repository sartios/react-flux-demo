var React = require('react');
var Sample = require('./components/sample');
var Products = require('./components/Products');
var ViewProducts = require('./components/ViewProducts');

var App = React.createClass({
	render: function(){
		return (
			<div className="container-fluid">
				<div className="row">
					<Products />
					<ViewProducts />
				</div>
			</div>);
	}
});

module.exports = App;