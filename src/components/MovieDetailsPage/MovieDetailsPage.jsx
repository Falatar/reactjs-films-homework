import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';
import ModalWindow from '../ModalWindow';
import PaginationPanel from '../PaginationPanel';
import TabPanel from '../TabPanel';
import MovieList from '../MovieList';

const MovieDetailsPage = () => (
  <div id="MovieDetailsPage">
    <Header />
    <TabPanel />
    <Route path="/:page?/:mode?/:filter?/:genre?" component={MovieList} />
    <PaginationPanel />
    <ModalWindow />
  </div>
);
// <Route path=":view/:filter" element={<MovieList ganreMode={false} />} />
// <Route path=":view/:filter/:genre" element={<MovieList ganreMode />} />

export default MovieDetailsPage;
