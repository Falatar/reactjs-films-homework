import React from 'react';
import { hot } from 'react-hot-loader/root';
import Topper from './components/Topper/Topper';
import MoviewList from './components/MoviewList/MoviewList';
import ModalWindow from './components/ModalWindow/ModalWindow';


const App = () => (
  <div>
    <Topper />
    <MoviewList />
    <ModalWindow />
  </div>
);

export default hot(App);
