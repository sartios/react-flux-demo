var React = require('react');
var Sample = require('./components/sample');
var Products = require('./components/Products');

var App = React.createClass({
	render: function(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<Products />
					</div>
				</div>
			</div>);
	}
});

module.exports = App;