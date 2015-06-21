import Dispatcher from "src/Dispatcher";
import Events from "events";
import _ from "underscore";

var EventEmitter = Events.EventEmitter;

var TodoStore = _.extend({}, EventEmitter.prototype, {
	create: function(text) {
		this.emit("TodoCreated");
	},
	addChangeListener: function(callback) {
		this.on("TodoCreated", callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener("TodoCreated", callback);
	}
});

// Register callback to handle all updates
Dispatcher.register(function(action) {
	var text;

	switch (action.actionType) {
		case "addTodo":
			TodoStore.create(action.text);
			break;
	}
});

export default TodoStore;