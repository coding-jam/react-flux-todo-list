import React from "react";
import Actions from "src/Actions";
import { connect } from 'react-redux';

class List extends React.Component{
	
	render() {

		var items = this.props.data.map(function(todo,i) {
			return (
				<tr key={i}>
					<td>
						<a className="btn btn-success" href={'#/detail/' + i}>Edit</a>
						<button type="button" 
							className="btn btn-danger" 
							onClick={this.props.dispatch.bind(this,Actions.delete(i))}>
								Elimina
						</button>
					</td>
					<td>{todo}</td>
				</tr>
			);
		},this);

		var emptyRow = (<tr><td colSpan="2">Niente da fare</td></tr>);

	    return (
	    	<div>
		    	<a className="btn btn-info" href="#/detail">Add</a>
		    	<table className="table table-striped">
					<thead>
						<tr>
							<th colSpan="2">Todo</th>
						</tr>
					</thead>
					<tbody>
						{this.props.data.length ? items : emptyRow}
					</tbody>
					<tfoot>
					    <tr className="text-center">
					      <td colSpan="2">Total Todos : {this.props.data.length}</td>
					    </tr>
  					</tfoot>
				</table>
			</div>
	    );
	}
}

var select = (state) => {
	return {
		data:state.todos
	};
};

export default connect(select)(List);