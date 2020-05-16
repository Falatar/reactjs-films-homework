import { mapStateToProps, mapDispatchToProps } from '../MovieListContainer';

jest.mock('../../../modules/filmListModule/filmListModuleSelector.js', () => ({
  getMoviesInfo: jest.fn().mockReturnValue([
    {
      id: 0,
      title: 'test',
      backdrop_path: '',
      vote_average: 0,
      genre_str: '',
      overview: '',
    },
  ]),
  getSearchResult: jest.fn().mockReturnValue(true),
}));

jest.mock('../../../modules/filmListModule/filmListModuleActions.js', () => ({
  loadActualFilms: jest.fn().mockReturnValue({
    type: 'LOAD_MOVIE_LIST',
  }),
  loadGenres: jest.fn().mockReturnValue({
    type: 'LOAD_GENRE_LIST',
  }),
}));

describe('MovieListContainer', () => {
  it('should map state to props correctly', () => {
    const testInput = {
      filmList: [
        {
          id: 0,
          title: 'test',
          backdrop_path: '',
          vote_average: 0,
          genre_str: '',
          overview: '',
        },
      ],
      searchResult: true,
    };

    expect(mapStateToProps()).toEqual(testInput);
  });

  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).getFilmList();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOAD_MOVIE_LIST' });

    mapDispatchToProps(dispatch).loadGenreList();
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'LOAD_GENRE_LIST' });
  });
});
