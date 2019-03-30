import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from './reducer.js';

export const store = createStore(reducers, applyMiddleware(thunk));