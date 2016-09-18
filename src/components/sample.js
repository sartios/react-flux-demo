var React = require('react');
var Actions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');



var Comp = React.createClass({
	componentDidMount: function(){
		AppStore.addChangeListener(this._showLogs);
	},
	render: function(){
		return (<div>
				<h2 onClick={this._sayHello}>Hello from sample app</h2>
			</div>);
	},
	_sayHello: function(){
		console.log('Comp._sayHello')
		Actions.sayHello();
	},
	_showLogs: function(){
		console.log('Hello world!!!!');
	}
});

module.exports = Comp;