import React from 'react';
import { hot } from 'react-hot-loader/root';
import Topper from './components/Topper/Topper';
import MoviewList from './components/MoviewList/MoviewList';


const App = () => (
  <div>
    <Topper />
    <MoviewList />
  </div>
);

export default hot(App);
