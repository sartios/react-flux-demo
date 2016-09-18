var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
	sayHello: function(){
		AppDispatcher.dispatch({
			actionType: 'sayHello' 
		});
	}
};

module.exports = AppActions;