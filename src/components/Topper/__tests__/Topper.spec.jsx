import React from 'react';
import renderer from 'react-test-renderer';
import TopperContainer from '../TopperContainer';

it('renders correctly', () => {
  const tree = renderer
    .create(<TopperContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
