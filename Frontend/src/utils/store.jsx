import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noOp => noOp,
  ),
);


export default store;