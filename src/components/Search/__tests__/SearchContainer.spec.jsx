import { mapStateToProps, mapDispatchToProps } from '../SearchContainer';

jest.mock('../../../modules/filmListModule/filmListModuleSelector.js', () => ({
  getActualMode: jest.fn().mockReturnValue('Mode'),
  getActualGenre: jest.fn().mockReturnValue('Genre'),
  getCurrentPage: jest.fn().mockReturnValue(0),
  getActiveView: jest.fn().mockReturnValue('View'),
  getSearchStr: jest.fn().mockReturnValue('Str'),
}));

jest.mock('../../../modules/filmListModule/filmListModuleActions.js', () => ({
  saveSearchStr: jest.fn().mockReturnValue({
    type: 'SAVE_SEARCH_STRING',
  }),
}));

describe('SearchContainer.spec', () => {
  it('should map state to props correctly', () => {
    const testInput = {
      activeMode: 'Mode',
      activeGenre: 'Genre',
      actualPage: 0,
      activeView: 'View',
      searchStr: 'Str',
    };

    expect(mapStateToProps()).toEqual(testInput);
  });

  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).saveSearchStr();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SAVE_SEARCH_STRING' });
  });
});
