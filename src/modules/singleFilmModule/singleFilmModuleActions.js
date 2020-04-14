export const openModal = () => async (dispatch) => dispatch({
  type: 'PREPARE_MODAL_WINDOW',
  payload: true,
});

export const closeModal = () => async (dispatch) => dispatch({
  type: 'HIDE_MODAL_WINDOW',
  payload: false,
});

const updateTrailerPath = (id) => async (dispatch) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US`;
  const promise = await fetch(url);
  const videos = await promise.json();
  return dispatch({
    type: 'UPDATE_TRAILER_ROOT',
    payload: videos,
  });
};

export default updateTrailerPath;
