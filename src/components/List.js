import React from "react";

export default class List extends React.Component{
	render() {
	    return (
	    	<div>
		    	<button className="btn btn-info">Add</button>
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