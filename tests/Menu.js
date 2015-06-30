import Menu from "src/components/Menu";
import React from "react";
import ReactAddons from "react/addons";

var TestUtils = ReactAddons.addons.TestUtils;

describe('Menu Component', function(){
    it('should exists', function() {
    	expect(Menu).toBeDefined();
    });
});