import React from "react";
import Actions from "src/Actions";
import Store from "src/Store";

export default class List extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      data:Store.get()
	    };

	    this.listener = this._listener.bind(this);
	}

	_listener(){
		this.setState({
      		data:Store.get()
	    });
	}

	componentDidMount() {
	    Store.addChangeListener(this.listener);
	}

  	componentWillUnmount() {
    	Store.removeChangeListener(this.listener);
  	}

  	delete(index) {
  		Actions.delete(index);
	}

	render() {

		var items = this.state.data.map(function(todo,i) {
			return (
				<tr key={i}>
					<td>
						<a className="btn btn-success" href={'#/detail/' + i}>Edit</a>
						<button type="button" className="btn btn-danger" onClick={this.delete.bind(this,i)}>
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
						{this.state.data.length ? items : emptyRow}
					</tbody>
					<tfoot>
					    <tr className="text-center">
					      <td colSpan="2">Total Todos : {this.state.data.length}</td>
					    </tr>
  					</tfoot>
				</table>
			</div>
	    );
	}
}