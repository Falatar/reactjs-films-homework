import React from 'react';
import renderer from 'react-test-renderer';
import Rate from '../Rate';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rate rating={0.0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
