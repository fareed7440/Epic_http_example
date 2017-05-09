import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

import userReducer from '../reducers/userReducer';

import UserEpic from './actions/epic';

export const rootReducer = combineReducers({
    userReducer
})

export const rootEpic = combineEpics(
    UserEpic.getUserData,
UserEpic.getPostData,
UserEpic.DeleteFunction
)

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);

let store = createStore(rootReducer,createStoreWithMiddleware)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
