import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from '../App';
import TodoListPicker from './TodoListPicker';
import About from './About';

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={TodoListPicker} />
      <Route path="/jojojack/:listId" component={App} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
