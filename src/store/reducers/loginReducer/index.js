// action types
import { LOGIN } from '../../actions/types';

const initialState = {
  user: {},
};


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default loginReducer;
