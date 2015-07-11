import Dispatcher from "src/Dispatcher";
import Events from "events";
import _ from "underscore";

var EventEmitter = Events.EventEmitter;

var data = [];

Dispatcher.register(function(action) {
	var text;

	switch (action.actionType) {
		case "addTodo":
			TodoStore.add(action.text);
			break;
		case "updateTodo":
			TodoStore.update(action.index,action.text);
			break;
		case "deleteTodo":
			TodoStore.delete(action.index);
			break;
		case "deleteAll":
			TodoStore.deleteAll();
			break;
	};
});

var TodoStore = _.extend({
	add: function(text) {
		data.push(text);
		this.emit("ListChanged");
	},
	update:function(index,text){
		data[index] = text;
		this.emit("ListChanged");
	},
	delete:function(index){
		data.splice(index, 1);
		this.emit("ListChanged");
	},
	deleteAll:function(){
		data = [];
		this.emit("ListChanged");
	},
	get:function(){
		return data;
	},
	addChangeListener: function(callback) {
		this.on("ListChanged", callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener("ListChanged", callback);
	}
},EventEmitter.prototype);

export default TodoStore;