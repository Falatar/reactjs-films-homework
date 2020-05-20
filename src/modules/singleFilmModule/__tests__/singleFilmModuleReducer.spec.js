import expect from 'expect';
import { singleFilmModuleReducer, initialState } from '../singleFilmModuleReducer';

describe('singleFilmModuleReducer', () => {
  it('should return the initial state', () => {
    expect(singleFilmModuleReducer(initialState, () => {})).toEqual(initialState);
  });

  it('should work without first param', () => {
    const testAction = {
      type: 'PREPARE_MODAL_WINDOW',
      payload: true,
    };
    expect(singleFilmModuleReducer(undefined, testAction)).toEqual({
      ...initialState,
      status: true,
    });
  });

  it('should handle PREPARE_MODAL_WINDOW', () => {
    const action = {
      type: 'PREPARE_MODAL_WINDOW',
    };
    expect(singleFilmModuleReducer(initialState, action)).toEqual({
      ...initialState,
      status: true,
    });
  });

  it('should handle UPDATE_TRAILER_ROOT', () => {
    const action = {
      type: 'UPDATE_TRAILER_ROOT',
      payload: 'root',
    };
    expect(singleFilmModuleReducer(initialState, action)).toEqual({
      ...initialState,
      root: 'root',
    });
  });

  it('should handle HIDE_MODAL_WINDOW', () => {
    const action = {
      type: 'HIDE_MODAL_WINDOW',
    };
    expect(singleFilmModuleReducer(initialState, action)).toEqual({
      ...initialState,
      status: false,
    });
  });
});
