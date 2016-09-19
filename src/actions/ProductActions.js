var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductContstants = require('../constants/ProductContstants');

var ProductActions = {
	create: function(product){
		AppDispatcher.dispatch({
			actionType: ProductContstants.PRODUCT_CREATE,
			product: product
		});
	},
	update: function(id,product){
		AppDispatcher.dispatch({
			actionType: ProductContstants.PRODUCT_UPDATE,
			product: product,
			id: id
		});
	},
	destroy: function(id){
		AppDispatcher.dispatch({
			actionType: ProductContstants.PRODUCT_DESTROY,
			id: id
		});
	},
	destroyAll: function(){
		AppDispatcher.dispatch({
			actonType: ProductContstants.PRODUCT_DESTROY_ALL
		});
	},
	getAll: function(){
		AppDispatcher.dispatch({
			actionType: ProductContstants.PRODUCT_GET_ALL
		});
	},
	getById: function(id){
		AppDispatcher.dispatch({
			actionType: ProductContstants.PRODUCT_GET_BY_ID,
			id: id
		});
	}
};

module.exports = ProductActions;