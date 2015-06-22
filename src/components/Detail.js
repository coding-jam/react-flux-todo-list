import React from "react";
import Actions from "src/Actions";
import Store from "src/Store";

export default class Detail extends React.Component{

	constructor(props){
		super(props);
		
		this.save = this._save.bind(this);
		this.handleChange = this._handleChange.bind(this);

		var currentTodo = this.props.params.id ? Store.get()[this.props.params.id] : "";
		this.state = {
			currentTodo:currentTodo
		};
	}

	render() {
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
						value={this.state.currentTodo}
						onChange={this.handleChange}/>
	  			</div>
	  			<button type="button" className="btn btn-default" onClick={this.save}>Save</button>
  			</form>
	    );
	}

	_save() {
		var inputComponent = React.findDOMNode(this.refs.text);
		
		if(this.props.params.id){
			Actions.update(this.props.params.id,inputComponent.value);
		}else{
			Actions.add(inputComponent.value);
		}
		
		location.hash = "/list";
	}

	_handleChange(event) {
    	this.setState({currentTodo: event.target.value});
  	}

}