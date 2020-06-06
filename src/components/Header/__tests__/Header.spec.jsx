import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

jest.mock('../../Search', () => 'Search');
jest.mock('../../FilmTitle', () => 'FilmTitle');
jest.mock('../../Info', () => 'Info');

describe('Header', () => {
  const testInput = {
    backdrop_path: '',
    title: 'test',
    genre_str: '',
    vote_average: 0,
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(<Header mostPopularFilm={testInput} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without input', () => {
    const tree = renderer
      .create(<Header mostPopularFilm={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
