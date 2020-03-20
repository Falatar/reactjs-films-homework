const closeModal = () => async (dispatch) => dispatch({
  type: 'HIDE_MODAL_WINDOW',
  payload: false,
});

export default closeModal;
