import React from 'react';
import renderer from 'react-test-renderer';
import FilmBlockBackSide from '../FilmBlockBackSide';

jest.mock('../../FilmDescription', () => 'FilmDescription');

describe('FilmBlockBackSide', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <FilmBlockBackSide
          poster=""
          name="nemo"
          tagList="empty"
          rating={0.0}
          overview="some text"
          callModal={() => {}}
          switchMode={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
