var React = require('react');
var Sample = require('./components/sample');
var Products = require('./components/Products');

var App = React.createClass({
	render: function(){
		return (<div>
				<Products />
			</div>);
	}
});

module.exports = App;