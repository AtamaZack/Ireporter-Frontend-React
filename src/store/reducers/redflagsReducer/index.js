// action types
import { ALL_REDFLAGS } from '../../actions/types';

const initialState = {
  redflags: [],
};


const redflagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_REDFLAGS:
      return {
        ...state,
        redflags: action.redflags,
      };
    default:
      return state;
  }
};

export default redflagsReducer;
