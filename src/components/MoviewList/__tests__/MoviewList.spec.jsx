import React from 'react';
import renderer from 'react-test-renderer';
import MoviewListContainer from '../MoviewListContainer';

it('renders correctly', () => {
  const tree = renderer
    .create(<MoviewListContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
