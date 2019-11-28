import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import Signature from '../components/Signature.jsx';

render(
  <Signature name="Falatar" />,
  document.getElementById('root')
)




module.hot.accept();