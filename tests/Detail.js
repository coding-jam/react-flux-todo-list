import Detail from "src/components/Detail";
import React from "react";
import ReactAddons from "react/addons";
import Actions from "src/Actions";
import Store from "src/Store";

var TestUtils = ReactAddons.addons.TestUtils;

describe('Detail Component', function(){

	var detailComponent;
	var inputElement;
    var saveButton;

    var params = {};

    var DUMMY_VALUE = 'Test';

    describe('Empty Detail',function(){

        beforeEach(function() {
            detailComponent = TestUtils.renderIntoDocument(<Detail params={params}></Detail>);
            inputElement = React.findDOMNode(detailComponent.refs.text);
            saveButton = TestUtils.findRenderedDOMComponentWithTag(detailComponent,"button");
        });

        it('the input component should be empty', function() {
            expect(inputElement.value).toBe("");
        });

        it('should sync the value of the component with its state',function(){
            TestUtils.Simulate.change(inputElement, {target: {value: DUMMY_VALUE}});
            expect(detailComponent.state.currentTodo).toBe(DUMMY_VALUE);
        });

        it('clicking the save button should add a todo to the Store list',function(){
            TestUtils.Simulate.click(saveButton);
            expect(Store.get().length).toBe(1);
        });
    });

    describe('Populated Detail',function(){
        beforeEach(function() {

            params = {
                id:"0"
            };

            Actions.add(DUMMY_VALUE);

            detailComponent = TestUtils.renderIntoDocument(<Detail params={params}></Detail>);
            inputElement = React.findDOMNode(detailComponent.refs.text);
            saveButton = TestUtils.findRenderedDOMComponentWithTag(detailComponent,"button");

        });

        it('the input component should contain the todo value', function() {
            expect(inputElement.value).toBe(DUMMY_VALUE);
        });

        it('clicking the save button should modify the right todo in the list',function(){
            var NEW_DUMMY_VALUE = 'NewTest';
            TestUtils.Simulate.change(inputElement, {target: {value: NEW_DUMMY_VALUE}});
            TestUtils.Simulate.click(saveButton);
            expect(Store.get().length).toBe(1);
            expect(Store.get()[0]).toBe(NEW_DUMMY_VALUE);
        });
    });

    afterEach(function() {
        Actions.deleteAll();
    });

});