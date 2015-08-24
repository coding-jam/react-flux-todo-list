var add = function(text) {
	return {
		actionType: "addTodo",
		text: text
	};
};

var update = function(index, text) {
	return {
		actionType: "updateTodo",
		text: text,
		index: index
	};
};

var deleteTodo = function(index) {
	return {
		actionType: "deleteTodo",
		index: index
	};
};

var deleteAll = function(){
	return {
		actionType: "deleteAll"
	};
};

export default {
	add: add,
	update: update,
	delete:deleteTodo,
	deleteAll:deleteAll
};