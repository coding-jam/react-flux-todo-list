import Menu from "src/components/Menu";
import React from "react";
import ReactAddons from "react/addons";

var TestUtils = ReactAddons.addons.TestUtils;

describe('Menu Component', function(){

	var menuComponent;
	var ulElement;

	beforeEach(function() {
	    menuComponent = TestUtils.renderIntoDocument(<Menu></Menu>);
	    ulElement = TestUtils.findRenderedDOMComponentWithTag(menuComponent, "ul");
	});

	
    it('should exists', function() {
    	expect(menuComponent).toBeDefined();
    });

    it('should contain an ul element', function() {
    	expect(ulElement).toBeDefined();
    });

    it('should contain exactly two li element', function() {
    	var children = ulElement.props.children;
    	var onlyLiElements = true;
    	for (var i = 0; i < children.length; i++) {
    		if(children[i].type !== 'li'){
    			onlyLiElements = false;
    			break;
    		}
    	};
    	expect(children.length).toBe(2);
    	expect(onlyLiElements).toBe(true);
    });
});