import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import testReducer from '../reducers/test';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      test: testReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  // store.subscribe(() => saveToLocalStorage(store.getState()))

  return store;
};