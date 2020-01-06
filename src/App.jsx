import React from 'react';
import { hot } from 'react-hot-loader/root';
import Signature from './components/Signature';
import TestComponent from './components/TestComponent';


const App = () => (
  <div>
    <Signature name="Falatar" />
    <TestComponent x={20} y={5} z={5} />
  </div>
);

export default hot(App);
