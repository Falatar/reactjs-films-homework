import React from 'react';
import { hot } from 'react-hot-loader/root';
import Topper from './components/Topper';
import MoviewList from './components/MoviewList';
import ModalWindow from './components/ModalWindow';


const App = () => (
  <div>
    <Topper />
    <MoviewList />
    <ModalWindow />
  </div>
);

export default hot(App);
