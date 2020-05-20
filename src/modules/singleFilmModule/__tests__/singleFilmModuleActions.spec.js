import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from '../singleFilmModuleActions';
import { createAdressString } from '../../../services/requester';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('singleFilmModuleActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('openModal completed successfully', () => {
    const expectedAction = [
      {
        type: 'PREPARE_MODAL_WINDOW',
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.openModal()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('closeModal completed successfully', () => {
    const expectedAction = [
      {
        type: 'HIDE_MODAL_WINDOW',
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.closeModal()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('updateTrailerPath completed successfully', () => {
    fetchMock.getOnce(createAdressString('movie/2206217', 'videos'), {
      headers: { 'content-type': 'application/json' },
      body: {
        id: 2206217,
        results: [
          { id: 'id_1' },
          { id: 'id_2' },
        ],
      },
    });
    const expectedAction = [
      {
        type: 'UPDATE_TRAILER_ROOT',
        payload: {
          id: 2206217,
          results: [
            { id: 'id_1' },
            { id: 'id_2' },
          ],
        },
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.updateTrailerPath(2206217)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
