import Dispatcher from "src/Dispatcher";

var add = function(text) {
	Dispatcher.dispatch({
		actionType: "addTodo",
		text: text
	});
};

var update = function(index, text) {
	Dispatcher.dispatch({
		actionType: "updateTodo",
		text: text,
		index: index
	});
};

var deleteTodo = function(index) {
	Dispatcher.dispatch({
		actionType: "deleteTodo",
		index: index
	});
};
export default {
	add: add,
	update: update,
	delete:deleteTodo
};