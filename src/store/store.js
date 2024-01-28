import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/user-reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
//import {  applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { filtersReducer } from "./reducers/filters-reducer";
const rootReducer = combineReducers({
    userReducer: userReducer,
    filtersReducer: filtersReducer,
  });
  
export const store = createStore( rootReducer,composeWithDevTools(applyMiddleware(thunk)))