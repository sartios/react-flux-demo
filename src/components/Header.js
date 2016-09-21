var React = require('react');
var ProductStore = require('../stores/ProductStore');

var Header = React.createClass({

	getInitialState: function(){
		var products = Object.keys(ProductStore.getAll()).length;
		return {
			products: products
		}
	},
	componentDidMount: function(){
		ProductStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		var products = Object.keys(ProductStore.getAll()).length;
		this.setState({
			products: products
		});
	},
	_renderProductElement: function(){
		return (this.state.products > 0 ? 
		<li><a href="#/products">Products <span className="label label-danger">{this.state.products}</span> </a></li>:
		<li><a href="#/products">Products</a></li>);
	},
	_renderNavigationBar: function(){
		var productElement = this._renderProductElement();
		console.log(productElement);
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
							{productElement}
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