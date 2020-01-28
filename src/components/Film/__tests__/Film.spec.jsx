import React from 'react';
import renderer from 'react-test-renderer';
import Film from '../Film';

it('renders correctly', () => {
  const tree = renderer
    .create(<Film name="nemo" genrePtime="empty" rating={0.0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});