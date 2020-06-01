import React from 'react';
import renderer from 'react-test-renderer';
import FilmTitle from '../FilmTitle';

describe('FilmTitle', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FilmTitle name="nemo" genrePtime="empty" rating="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
