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
  const videos = await makeRequest(`movie/${id}`, 'videos', '0f3cfa59da5e9c54b4eebea803330d71', 'language=en-US');
  return dispatch({
    type: 'UPDATE_TRAILER_ROOT',
    payload: videos,
  });
};

export default updateTrailerPath;
