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
  RESET_MESSAGE,
  VERIFY_TOKEN
} from '../types';
import axios from 'axios';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    resetMessage: null,
    isValidToken: false,
    resetToken: localStorage.getItem('resetToken')
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

  //?reset password here
  const resetPassword = async resetEmail => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(
        '/api/admin/reset-password',
        resetEmail,
        config
      );
      dispatch({
        type: RESET_MESSAGE,
        payload: res.data.msg
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.msg
      });
    }
  };
  //?validate the token
  const validateResetToken = async resetToken => {
    try {
      const res = await axios.get(`/api/admin/reset/${resetToken}`);
      dispatch({
        type: VERIFY_TOKEN,
        payload: res.data
      });
    } catch (error) {
      // console.log(error.message);
      dispatch({
        type: AUTH_ERROR
      });
    }
  };
  //?change the password
  const newPassword = async newpassword => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(
        '/api/admin/reset',
        newpassword,
        config
      );
      dispatch({
        type: RESET_MESSAGE,
        payload: res.data
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.msg
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
      loadUser();
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
        PasswordresetMessage: state.resetMessage,
        isValidToken: state.isValidToken,
        resetToken: state.resetToken,
        loadUser,
        resetPassword,
        validateResetToken,
        newPassword,
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
