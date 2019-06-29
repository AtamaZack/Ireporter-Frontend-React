import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducer';

// const enhancers = composeWithDevTools(applyMiddleware(thunk));
// const store = createStore(rootReducers, {}, enhancers);

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store;
