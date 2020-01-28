import React from 'react';
import renderer from 'react-test-renderer';
import Info from '../Info';

it('renders correctly', () => {
  const tree = renderer
    .create(<Info />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});