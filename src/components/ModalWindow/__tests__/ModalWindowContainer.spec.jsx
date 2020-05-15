import { mapStateToProps, mapDispatchToProps } from '../ModalWindowContainer';

jest.mock('../../../modules/singleFilmModule/singleFilmModuleSelector.js', () => ({
  isModalActive: jest.fn().mockReturnValue(true),
  getVideoLink: jest.fn().mockReturnValue('root'),
}));

jest.mock('../../../modules/singleFilmModule/singleFilmModuleActions.js', () => ({
  closeModal: jest.fn().mockReturnValue({
    type: 'HIDE_MODAL_WINDOW',
  }),
}));

describe('ModalWindowContainer', () => {
  it('should map state to props correctly', () => {
    const testInput = {
      status: true,
      root: 'root',
    };

    expect(mapStateToProps()).toEqual(testInput);
  });

  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).endModalSession();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'HIDE_MODAL_WINDOW' });
  });
});
