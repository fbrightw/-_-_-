import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import giftArray from './giftsSlice'

const reducer = combineReducers({
  giftArray: giftArray,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk, createLogger()))
);

