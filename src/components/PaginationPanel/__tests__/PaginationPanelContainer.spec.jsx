import { mapStateToProps, mapDispatchToProps } from '../PaginationPanelContainer';

jest.mock('../../../modules/filmListModule/filmListModuleSelector.js', () => ({
  getNumberOfFilms: jest.fn().mockReturnValue(115),
  getCurrentPage: jest.fn().mockReturnValue(5),
}));

jest.mock('../../../modules/filmListModule/filmListModuleActions.js', () => ({
  moveLeft: jest.fn().mockReturnValue({
    type: 'UPDATE_ACTUAL_PAGE',
    payload: 4,
  }),
  moveRight: jest.fn().mockReturnValue({
    type: 'UPDATE_ACTUAL_PAGE',
    payload: 6,
  }),
  moveLeftToEnd: jest.fn().mockReturnValue({
    type: 'UPDATE_ACTUAL_PAGE',
    payload: 1,
  }),
  moveRightToEnd: jest.fn().mockReturnValue({
    type: 'UPDATE_ACTUAL_PAGE',
    payload: 10,
  }),
}));

describe('PaginationPanelContainer', () => {
  it('should map state to props correctly', () => {
    const testInput = {
      totalFilms: 115,
      actualPage: 5,
    };

    expect(mapStateToProps()).toEqual(testInput);
  });

  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).left();
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'UPDATE_ACTUAL_PAGE',
      payload: 4,
    });

    mapDispatchToProps(dispatch).right();
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: 'UPDATE_ACTUAL_PAGE',
      payload: 6,
    });

    mapDispatchToProps(dispatch).finallyLeft();
    expect(dispatch.mock.calls[2][0]).toEqual({
      type: 'UPDATE_ACTUAL_PAGE',
      payload: 1,
    });

    mapDispatchToProps(dispatch).finallyRight();
    expect(dispatch.mock.calls[3][0]).toEqual({
      type: 'UPDATE_ACTUAL_PAGE',
      payload: 10,
    });
  });
});
