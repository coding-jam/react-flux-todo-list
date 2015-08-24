import React from "react";
import Actions from "src/Actions";
import { connect } from 'react-redux';

class Detail extends React.Component{

	constructor(props){
		super(props);
		this.save = this._save.bind(this);
	}

	render() {
		var currentTodo = this.props.params.id ? this.props.todos[this.props.params.id] : "";
	    
	    return (
	      	<form>
	      		<div className="form-group">
	    			<label htmlFor="textField">Todo</label>
					<input 
						ref="text" 
						type="text" 
						className="form-control" 
						id="textField" 
						placeholder="Write Here" 
						defaultValue={currentTodo}/>
	  			</div>
	  			<button type="button" className="btn btn-default" onClick={this.save}>Save</button>
  			</form>
	    );
	}

	_save() {
		var inputComponent = React.findDOMNode(this.refs.text);
		
		if(this.props.params.id){
			this.props.dispatch(Actions.update(this.props.params.id,inputComponent.value));
		}else{
			this.props.dispatch(Actions.add(inputComponent.value));
		}
		
		location.hash = "/list";
	}

}

var select = (state) => {
	return {
		todos:state.todos
	};
};

export default connect(select)(Detail);