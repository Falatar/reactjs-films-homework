import React from 'react';
import { Route } from 'react-router-dom';
import style from './SearchResultsPage.scss';
import Search from '../Search';
import MovieList from '../MovieList';
import ModalWindow from '../ModalWindow';
import PaginationPanel from '../PaginationPanel';
import TabPanel from '../TabPanel';

const SearchResultsPage = () => (
  <div id="SearchResultsPage">
    <div className={style.header}>
      <Search />
    </div>
    <TabPanel />
    <Route path="/search/:search_str/:page/:view" component={MovieList} />
    <PaginationPanel />
    <ModalWindow />
  </div>
);

export default SearchResultsPage;
