export const initialState = {
  status: false,
  root: '',
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'PREPARE_MODAL_VIDEO':
      return { ...state, status: action.payload };

    case 'UPDATE_TRAILER_ROOT':
      return { ...state, root: action.payload };

    case 'HIDE_MODAL_WINDOW':
      return { ...state, status: action.payload };

    default: return state;
  }
}
