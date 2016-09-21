var React = require('react');

var Header = React.createClass({
	_renderNavigationBar: function(){
		return (
			<div className="nav navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button className="navbar-toggle" data-toggle="collapse" data-target="#navigationBar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="/">Home</a>
					</div>
					<div id="navigationBar">
						<ul className="nav navbar-nav">
							<li><a href="#/products">Products</a></li>
						</ul>
					</div>					
				</div>
			</div>);
	},
	render: function(){
		return this._renderNavigationBar();
	}
});

module.exports = Header;