import React from 'react';
import renderer from 'react-test-renderer';
import FilmDescription from '../FilmDescription';

describe('FilmDescription', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FilmDescription name="nemo" genrePtime="empty" rating={0.0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly in alter mode', () => {
    const tree = renderer
      .create(<FilmDescription name="nemo" genrePtime="empty" rating={0.0} mode={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
