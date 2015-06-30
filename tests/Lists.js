import List from "src/components/List";
import React from "react";
import ReactAddons from "react/addons";
import _ from "underscore";
import Actions from "src/Actions";

var TestUtils = ReactAddons.addons.TestUtils;

describe('List Component', function() {

            var listComponent;
            var tableElement;
            var DUMMY_TODOS = ['first Item', 'second Item'];

            beforeEach(function() {
                    listComponent = TestUtils.renderIntoDocument( < List > < /List>);
                        tableElement = TestUtils.findRenderedDOMComponentWithTag(listComponent, "table");
                    });


                it('should exists', function() {
                    expect(listComponent).toBeDefined();
                });

                it('should contain a "table" element', function() {
                    expect(tableElement).toBeDefined();
                });

                it('should have a single placeholder row when no todos is present', function() {
                    var tbodyElement = TestUtils.findRenderedDOMComponentWithTag(tableElement, "tbody");

                    expect(_.isArray(tbodyElement.props.children)).toBe(false);
                    expect(tbodyElement.props.children.type).toBe('tr');
                });

                describe('List Component with data', function() {

                    var tbodyElement;

                    beforeEach(function() {
                        _.each(DUMMY_TODOS, function(todo) {
                            Actions.add(todo);
                        });

                        tbodyElement = TestUtils.findRenderedDOMComponentWithTag(tableElement, "tbody");
                    });

                    it('every todo object should be represented in a row', function() {
                        expect(tbodyElement.props.children.length).toBe(DUMMY_TODOS.length);
                    });

                    it('every todo row should have a "delete" button', function() {
                        _.each(TestUtils.scryRenderedDOMComponentsWithTag(tbodyElement, 'tr'), function(tr) {
                            expect(TestUtils.findRenderedDOMComponentWithClass(tr, "btn btn-danger")).toBeDefined();
                        });
                    });

                    it('Clicking on a delete button should remove a row', function() {

                        var aDeleteButton = TestUtils.scryRenderedDOMComponentsWithClass(listComponent, "btn btn-danger")[0];

                        TestUtils.Simulate.click(React.findDOMNode(aDeleteButton));

                        expect(tbodyElement.props.children.length).toBe(DUMMY_TODOS.length - 1);

                    });

                    afterEach(function() {
                        Actions.deleteAll();
                    });
                });

            });