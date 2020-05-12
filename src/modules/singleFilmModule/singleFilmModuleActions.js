import makeRequest from '../../services/requester';

export const openModal = () => async (dispatch) => dispatch({
  type: 'PREPARE_MODAL_WINDOW',
  payload: true,
});

export const closeModal = () => async (dispatch) => dispatch({
  type: 'HIDE_MODAL_WINDOW',
  payload: false,
});

const updateTrailerPath = (id) => async (dispatch) => {
  const videos = await makeRequest(`movie/${id}`, 'videos');
  return dispatch({
    type: 'UPDATE_TRAILER_ROOT',
    payload: videos,
  });
};

export default updateTrailerPath;
