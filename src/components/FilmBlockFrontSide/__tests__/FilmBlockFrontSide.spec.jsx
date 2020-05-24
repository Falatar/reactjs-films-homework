import React from 'react';
import renderer from 'react-test-renderer';
import FilmBlockFrontSide from '../FilmBlockFrontSide';

jest.mock('../../FilmDescription', () => 'FilmDescription');

describe('FilmBlockFrontSide', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <FilmBlockFrontSide
          poster=""
          id={1}
          name="nemo"
          tagList="empty"
          rating={0.0}
          callModal={() => {}}
          switchMode={() => {}}
          checkImgSizes={() => {}}
          setDefaultImg={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
