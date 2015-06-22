import React from "react";
import Router from 'react-router';
import App from "src/components/App";
import List from "src/components/List";
import Detail from "src/components/Detail";

var {Route,DefaultRoute} = Router;

export default (
	<Route handler={App}>
		<DefaultRoute handler={List}/>
		<Route path="detail/:id" handler={Detail}/>
		<Route path="detail" handler={Detail}/>
		<Route name="list" path="list" handler={List}/>
	</Route>
);