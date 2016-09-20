var React = require('react');
var Actions = require('../actions/ProductActions');

var Products = React.createClass({
	_generateSample: function(){
		Actions.create({
			name: 'sample product ' + (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
		});
	},
	render: function(){
		return (
			<div className="col-sm-7">
				<button className='btn btn-default' value='generate' onClick={this._generateSample}>Generate</button>
			</div>)
	}
});


module.exports = Products;