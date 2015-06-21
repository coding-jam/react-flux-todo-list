import React from "react";
import Router from 'react-router';

var Link = Router.Link;

export default class Menu extends React.Component{
	render() {
	    return (
			<ul className="nav nav-tabs" role="tablist">
    			<li role="presentation"><Link to="list" role="tab" data-toggle="tab">List</Link></li>
    			<li role="presentation"><Link to="detail" role="tab" data-toggle="tab">Detail</Link></li>
   			</ul>
	    );
	}
}