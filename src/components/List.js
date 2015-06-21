import React from "react";

var onAddClick = function(){
	console.log('Add');
};

export default class List extends React.Component{
	render() {
	    return (
	    	<div>
		    	<button className="btn btn-info" onClick={onAddClick}>Add</button>
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