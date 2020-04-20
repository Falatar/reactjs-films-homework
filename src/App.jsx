import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './components/Header';
import MoviewList from './components/MoviewList';
import ModalWindow from './components/ModalWindow';
import ScrollPanel from './components/ScrollPanel';

const App = () => (
  <div>
    <Header />
    <MoviewList />
    <ScrollPanel />
    <ModalWindow />
  </div>
);

export default hot(App);
