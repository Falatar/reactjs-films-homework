const openModal = () => async (dispatch) => dispatch({
  type: 'PREPARE_MODAL_VIDEO',
  payload: true,
});

export const updatePath = (id) => async (dispatch) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US`;
  const promise = await fetch(url);
  const videos = await promise.json();
  return dispatch({
    type: 'UPDATE_TRAILER_ROOT',
    payload: videos,
  });
};

export default openModal;
