import 'bootstrap/css/bootstrap.css!';

import React from "react";
import Router from 'react-router';
import { Provider } from 'react-redux';
import Routes from "src/Routes";
import Reducers from 'src/Reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger({
  level: 'debug'
});

const createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);

let store = createStoreWithMiddleware(Reducers);

Router.run(Routes, Router.HashLocation, (Root) => {
  React.render(<Provider store={store}>{() => <Root/>}</Provider>, document.getElementById('wrapper'));
});
