import React from "react";
import Actions from "src/Actions";
import Store from "src/Store";

var onAddClick = function(){
	Actions.add('Test');
};

export default class List extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      message: (new Date()).toString()
	    };
	}

	createListener(){
		var that = this;
		this.listener = function(){
			that.setState({
	      		message: (new Date()).toString()
	    	});
		};
		return this.listener;
	}

	componentDidMount() {
	    Store.addChangeListener(this.createListener());
	}

  	componentWillUnmount() {
    	Store.removeChangeListener(this.listener);
  	}

	render() {
	    return (
	    	<div>
		    	<button className="btn btn-info" onClick={onAddClick}>Add</button>
		    	<span>{this.state.message}</span>
				<table>
					<thead>
						<tr>
							<th>Todo</th>
						</tr>
					</thead>
				</table>
			</div>
	    );
	}
}