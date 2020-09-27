import { mapDispatchToProps } from '../FilmListContainer';


jest.mock('../../../modules/singleFilmModule/singleFilmModuleActions.js', () => ({
  updateTrailerPath: jest.fn().mockReturnValue({
    type: 'UPDATE_TRAILER_ROOT',
  }),
  openModal: jest.fn().mockReturnValue({
    type: 'PREPARE_MODAL_WINDOW',
  }),
}));

describe('FilmListContainer', () => {
  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).callTrailer();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'PREPARE_MODAL_WINDOW' });

    mapDispatchToProps(dispatch).setTrailer();
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'UPDATE_TRAILER_ROOT' });
  });
});
