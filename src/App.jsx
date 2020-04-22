import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './components/Header';
import MoviewList from './components/MoviewList';
import ModalWindow from './components/ModalWindow';
import PaginationPanel from './components/PaginationPanel';

const App = () => (
  <div>
    <Header />
    <MoviewList />
    <PaginationPanel />
    <ModalWindow />
  </div>
);

export default hot(App);
