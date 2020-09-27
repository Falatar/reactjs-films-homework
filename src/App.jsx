import React from 'react';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import SearchResultsPage from './components/SearchResultsPage';
import MovieDetailsPage from './components/MovieDetailsPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/search" component={SearchResultsPage} />
      <Route path="*" component={MovieDetailsPage} />
    </Switch>
  </BrowserRouter>
);

export default hot(App);
