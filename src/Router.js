import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/Home';

const Router = props => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/sergio" component={Home} />
    </div>
  </BrowserRouter>
);

export default Router;
