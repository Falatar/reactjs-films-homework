import { mapStateToProps, mapDispatchToProps } from '../HeaderContainer';

jest.mock('../../../modules/filmListModule/filmListModuleSelector.js', () => ({
  getTopFilm: jest.fn().mockReturnValue({
    backdrop_path: '',
    title: 'test',
    genre_str: '',
    vote_average: 0,
  }),
}));

jest.mock('../../../modules/filmListModule/filmListModuleActions.js', () => ({
  loadTopFilm: jest.fn().mockReturnValue({
    type: 'LOAD_MOST_POPULAR_FILM',
  }),
  loadGenres: jest.fn().mockReturnValue({
    type: 'LOAD_GENRE_LIST',
  }),
}));

describe('HeaderContainer', () => {
  it('should map state to props correctly', () => {
    const testInput = {
      mostPopularFilm: {
        backdrop_path: '',
        title: 'test',
        genre_str: '',
        vote_average: 0,
      },
    };

    expect(mapStateToProps()).toEqual(testInput);
  });

  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).LoadMostPopularFilm();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOAD_MOST_POPULAR_FILM' });

    mapDispatchToProps(dispatch).LoadGenreList();
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'LOAD_GENRE_LIST' });
  });
});
