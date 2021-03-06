import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


import user from './user'

const reducer = combineReducers({
    user,
})

export default configureStore({
    reducer
});