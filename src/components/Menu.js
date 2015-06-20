import React from "react";
import Router from 'react-router';

var Link = Router.Link;

export default class Menu extends React.Component{
	render() {
	    return (
	       	<ul>
	       		<li><Link to="list">List</Link></li>
	       		<li><Link to="detail">Detail</Link></li>
	       	</ul>
	    );
	  }
}