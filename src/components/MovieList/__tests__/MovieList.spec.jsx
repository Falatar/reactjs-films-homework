import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../MovieList';

jest.mock('../../FilmBlock', () => 'FilmBlock');

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
      .create(<MovieList filmList={testInput} searchResult />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without input', () => {
    const tree = renderer
      .create(<MovieList filmList={[]} searchResult />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without results', () => {
    const tree = renderer
      .create(<MovieList filmList={testInput} searchResult={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without input and results', () => {
    const tree = renderer
      .create(<MovieList filmList={[]} searchResult={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
