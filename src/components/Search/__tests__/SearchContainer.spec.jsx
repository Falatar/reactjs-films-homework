import { mapDispatchToProps } from '../SearchContainer';

jest.mock('../../../modules/filmListModule/filmListModuleActions.js', () => ({
  startSearch: jest.fn().mockReturnValue({
    type: 'SAVE_SEARCH_STRING',
  }),
}));

describe('SearchContainer.spec', () => {
  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).search();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SAVE_SEARCH_STRING' });
  });
});
