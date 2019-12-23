import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import Signature from './components/Signature';
import TestComponent from './components/TestComponent';

render(
  <div>
    <Signature name="Falatar" />
    <TestComponent x={10} y={5} z={5} />
  </div>,
  document.getElementById('root'),
);


module.hot.accept();
