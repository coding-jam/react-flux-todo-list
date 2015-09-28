const initialState = {
	todos: []
};

function addTodo(state,text){
	var toReturn = Object.assign({},state,{
		todos:[...state.todos]
	});

	toReturn.todos.push(text);

	return toReturn;
};

function updateTodo(state,index,text){
	var toReturn = Object.assign({},state,{
		todos:[...state.todos]
	});

	toReturn.todos[index] = text;

	return toReturn;	
};

function deleteTodo(state,index){
	var toReturn = Object.assign({},state,{
		todos:[...state.todos]
	});

	toReturn.todos.splice(index, 1);

	return toReturn;
};

export default function todoApp(state = initialState, action) {
	switch (action.actionType) {
		case "addTodo":
			return addTodo(state,action.text);
		case "updateTodo":
			return updateTodo(state,action.index,action.text)
		case "deleteTodo":
			return deleteTodo(state,action.index);
		case "deleteAll":
			return initialState;
		default:
			return state;
	};
}