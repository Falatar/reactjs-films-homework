import React from 'react';
import renderer from 'react-test-renderer';
import FilmData from '../FilmDataContainer';

describe('FilmData', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FilmData imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
