import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../MovieListContainer';

describe('MoviewList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MovieList />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
