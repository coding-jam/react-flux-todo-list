import React from "react";
import List from "src/components/List";
import Detail from "src/components/Detail";

export default class App extends React.Component{
	render() {
	    return (
	    	<div>
	    		<List/>
	      		<Detail/>
	    	</div>
	    );
	  }
}