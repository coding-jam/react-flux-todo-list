import React from "react";
import Router from 'react-router';
import App from "src/components/App";
import List from "src/components/List";
import Detail from "src/components/Detail";

var {Route,DefaultRoute} = Router;

export default (
	<Route handler={App}>
		<DefaultRoute handler={Detail}/>
		<Route name="detail" path="detail" handler={Detail}/>
		<Route name="list" path="list" handler={List}/>
	</Route>
);