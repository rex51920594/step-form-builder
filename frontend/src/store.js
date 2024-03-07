import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;