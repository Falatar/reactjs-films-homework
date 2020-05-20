import makeRequest from '../../services/requester';

export const openModal = () => async (dispatch) => dispatch({
  type: 'PREPARE_MODAL_WINDOW',
});

export const closeModal = () => async (dispatch) => dispatch({
  type: 'HIDE_MODAL_WINDOW',
});

export const updateTrailerPath = (id) => async (dispatch) => {
  const videos = await makeRequest(`movie/${id}`, 'videos');
  return dispatch({
    type: 'UPDATE_TRAILER_ROOT',
    payload: videos,
  });
};

export default updateTrailerPath;
