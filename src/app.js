var React = require('react');
var Sample = require('./components/sample');
var Products = require('./components/Products');
var ViewProducts = require('./components/ViewProducts');
var ProductForm = require('./components/ProductForm');
var Header = require('./components/Header');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var App = React.createClass({
	render: function(){
		return (
		<div>
			<Header/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Router history={hashHistory}>
							<Route path='/' component={ProductForm}/>
							<Route path='/products' component={ViewProducts}/>
						</Router>
					</div>
				</div>
			</div>
		</div>);
	}
});

module.exports = App;