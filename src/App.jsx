import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './components/Header';
import MovieList from './components/MovieList';
import ModalWindow from './components/ModalWindow';
import PaginationPanel from './components/PaginationPanel';
import TabPanel from './components/TabPanel';

const App = () => (
  <div>
    <Header />
    <TabPanel />
    <MovieList />
    <PaginationPanel />
    <ModalWindow />
  </div>
);

export default hot(App);
