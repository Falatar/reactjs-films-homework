import React from 'react';
import renderer from 'react-test-renderer';
import FilmDataContainer from '../FilmDataContainer';

it('renders correctly', () => {
  const tree = renderer
    .create(<FilmDataContainer imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
