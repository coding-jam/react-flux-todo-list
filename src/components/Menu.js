import React from "react";
import Router from 'react-router';

var Link = Router.Link;

export default class Menu extends React.Component{
	render() {
	    return (
			<ul className="nav nav-tabs" role="tablist">
    			<li role="presentation"><a href="#/list" role="tab" data-toggle="tab">List</a></li>
    			<li role="presentation"><a href="#/detail" role="tab" data-toggle="tab">Detail</a></li>
   			</ul>
	    );
	}
}