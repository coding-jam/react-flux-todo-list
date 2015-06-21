import React from "react";
import Router from 'react-router';

import Routes from "src/Routes";

Router.run(Routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('wrapper'));
});
