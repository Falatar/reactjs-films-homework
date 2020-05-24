import React from 'react';
import renderer from 'react-test-renderer';
import FilmBlock from '../FilmBlock';

jest.mock('../../FilmBlockFrontSide', () => 'FilmBlockFrontSide');
jest.mock('../../FilmBlockBackSide', () => 'FilmBlockBackSide');

describe('FilmBlock', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FilmBlock imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
