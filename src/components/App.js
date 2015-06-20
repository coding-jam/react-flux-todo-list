import React from "react";
import Router from 'react-router';
import Menu from "src/components/Menu";

var RouteHandler = Router.RouteHandler;

export default class App extends React.Component{
	render() {
	    return (
	    	<div>
	    		<h1>ToDo List</h1>
	    		<Menu/>
    		    <div className="Content">
		          <RouteHandler/>
		        </div>
	    	</div>
	    );
	  }
}