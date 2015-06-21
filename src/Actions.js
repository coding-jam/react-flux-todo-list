import Dispatcher from "src/Dispatcher";

var add = function(text){
	Dispatcher.dispatch({
      actionType: "addTodo",
      text: text
    });
};

export default {
	add:add
};