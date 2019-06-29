// action types
import { SIGNED_UP } from '../../actions/types';

const initialState = {
  user: {},
};


const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNED_UP:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default signupReducer;
