export const initialState = {
  status: false,
  root: {},
};

export function singleFilmModuleReducer(state = initialState, action) {
  switch (action.type) {
    case 'PREPARE_MODAL_WINDOW':
      return { ...state, status: true };

    case 'UPDATE_TRAILER_ROOT':
      return { ...state, root: action.payload };

    case 'HIDE_MODAL_WINDOW':
      return { ...state, status: false };

    default: return state;
  }
}
