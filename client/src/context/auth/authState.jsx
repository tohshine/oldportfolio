import React, { useReducer } from 'react';
import authReducer from './authReducers';
import AuthContext from './authContext';

import setAuthToken from '../../utils/setAuthToken';
import {
  LOAD_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERROR,
  CLEAR_AUTH_MESSAGE
} from '../types';
import axios from 'axios';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //?load user
  const loadUser = async () => {
    //?load token from memory to token header
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
     
    try {
      const res = await axios.get('/api/admin/auth');
      dispatch({
        type: LOAD_USER,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };
  //?register user
  const register = async formObj => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/admin/user', formObj, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      //loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response.data.msg
      });
    }
  };
  //?login user
  const login = async loginForm => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/admin/auth', loginForm, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loadUser()
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.msg
      });
    }
  };
  //?clear error
  const clearError = () => {
    dispatch({
      type: CLEAR_ERROR
    });
  };
  //?logout
  const logout = () => {
    dispatch({
      type: LOGOUT
    });
  };

 
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading,
        user: state.user,
        loadUser,
        register,
        login,
        clearError,
        logout
        
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
