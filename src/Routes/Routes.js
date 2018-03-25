import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import components
import GreetingPage from '../app/Greeting/GreetingPage';

export const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ GreetingPage }/>
    </Switch>
  </BrowserRouter>
);

export default function Routes() {
  return routes;
}
