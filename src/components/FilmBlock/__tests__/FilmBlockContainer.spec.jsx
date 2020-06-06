import { mapDispatchToProps } from '../FilmBlockContainer';

jest.mock('../../../modules/singleFilmModule/singleFilmModuleActions.js', () => ({
  openModal: jest.fn().mockReturnValue({
    type: 'PREPARE_MODAL_WINDOW',
  }),
  updateTrailerPath: jest.fn().mockReturnValue({
    type: 'UPDATE_TRAILER_ROOT',
  }),
}));

describe('FilmBlockContainer', () => {
  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).callTrailer();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'PREPARE_MODAL_WINDOW' });

    mapDispatchToProps(dispatch).setTrailer('');
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'UPDATE_TRAILER_ROOT' });
  });
});
