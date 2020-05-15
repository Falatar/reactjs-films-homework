import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../MovieList';

describe('MovieList', () => {
  const testInput = [
    {
      id: 0,
      title: 'test',
      backdrop_path: '',
      vote_average: 0,
      genre_str: '',
      overview: '',
    },
  ];

  it('renders correctly', () => {
    const tree = renderer
      .create(<MovieList filmList={testInput} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without input', () => {
    const tree = renderer
      .create(<MovieList filmList={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
