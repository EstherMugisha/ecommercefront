import { createSlice } from '@reduxjs/toolkit';

import API from '../Configuration/API';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {useContext} from 'react';


//slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user'),
  },

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      const token = state.jwt;
      //let decoded = jwt_decode(token);
      state.user.username = state.user.username;
      state.user.userId = state.user.id;
      state.user.role = state.user.role;
      state.user.email = state.user.email;
      state.user.name = state.user.name;
      state.user.token = token;
      console.log(state.user)
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem('token');
    },
    signUpSuccess: (state, action) => {},
  },
});

export default slice.reducer;

//Actions
const { loginSuccess, logoutSuccess, signUpSuccess } = slice.actions;
export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const res = axios.post("http://localhost:8080/authenticate", { username, password });
      const userData = res.data;
      dispatch(loginSuccess({ userData }));
    } catch (e) {
      return console.log(e.message);
    }
  };

export const signup =
  ({ fullname, username, password, Buyer, Seller }) =>
  async (dispatch) => {
    try {
      const res = await API.post('register', {
        fullname,
        username,
        password,
        Buyer,
        Seller,
      });
      const userData = res.data;
      dispatch(signUpSuccess({ userData }));
    } catch (e) {
      return console.log(e.message);
    }
  };

export const logout =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      //logout logic
      return dispatch(logoutSuccess());
    } catch (e) {
      return console.log(e.message);
    }
  };
