var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
	sayHello: function(){
		console.log('AppActions.sayHello');
		AppDispatcher.dispatch({
			actionType: 'sayHello' 
		});
	}
};

module.exports = AppActions;