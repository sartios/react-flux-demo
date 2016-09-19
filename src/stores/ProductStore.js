var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ProductConstants = require('../constants/ProductContstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var products = {};

function create(product){
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	products[id] = product;
}

function update(id, product){
	products[id] = assign({}, products[id], product);
}

function destroy(id){
	delete products[id];
}

function destroyAll(){
	products = {};
}

function getById(id){
	return products[id];
}

function getAll(){
	return products;
}


var ProductStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		return products;
	},
	getById: function(id){
		return products[id];
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}
});


AppDispatcher.register(function(action){
	switch(action.actionType){
		case ProductConstants.PRODUCT_CREATE:
			create(action.product);
			ProductStore.emitChange();
		break;
		case ProductConstants.PRODUCT_DESTROY:
			destroy(action.id);
			ProductStore.emitChange();
		break;
		case ProductConstants.PRODUCT_DESTROY_ALL:
			destroyAll();
			ProductStore.emitChange();
		break;
		case ProductConstants.PRODUCT_UPDATE:
			update(action.id, action.product);
			ProductStore.emitChange();
		break;
	}
});

module.exports = ProductStore;