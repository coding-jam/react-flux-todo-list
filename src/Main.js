import 'bootstrap/css/bootstrap.css!';

import React from "react";
import Router from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from "src/Routes";
import Reducers from 'src/Reducers';

let store = createStore(Reducers);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

Router.run(Routes, Router.HashLocation, (Root) => {
  React.render(<Provider store={store}>{() => <Root/>}</Provider>, document.getElementById('wrapper'));
});
