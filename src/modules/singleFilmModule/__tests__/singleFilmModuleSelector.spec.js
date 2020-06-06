import expect from 'expect';
import * as selector from '../singleFilmModuleSelector';

describe('singleFilmModuleSelector', () => {
  it('isModalActive works correctly', () => {
    const state = {
      singleFilmModuleReducer: {
        status: true,
      },
    };
    expect(selector.isModalActive(state)).toEqual(true);
  });

  it('getVideoLink works correctly', () => {
    const state = {
      singleFilmModuleReducer: {
        root: {
          id: 2206217,
          results: [
            { id: 'id_1' },
            { id: 'id_2' },
          ],
        },
      },
    };
    expect(selector.getVideoLink(state)).toEqual({
      id: 2206217,
      results: [
        { id: 'id_1' },
        { id: 'id_2' },
      ],
    });
  });

  it('getVideoLink works correctly without results', () => {
    const state = {
      singleFilmModuleReducer: {
        root: {},
      },
    };
    expect(selector.getVideoLink(state)).toEqual(undefined);
  });
});
