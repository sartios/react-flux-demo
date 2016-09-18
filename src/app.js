var React = require('react');
var Sample = require('./components/sample');

var App = React.createClass({
	render: function(){
		return (<div>
				<Sample />
			</div>);
	}
});

module.exports = App;