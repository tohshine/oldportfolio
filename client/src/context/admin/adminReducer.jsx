import React from 'react';
import {
  ADD_CV,
  UPDATE_CV,
  GET_CV,
  CLEAR_CURRENT,
  SET_CURRENT,
  FETCH_ERROR,
  MESSAGES,
  LOGOUT
} from '../types';
const adminReducer = (state, action) => {
  switch (action.type) {
    case GET_CV:
      return {
        ...state,
        profileCv: action.payload
      };

    case ADD_CV:
      return {
        ...state,
        profileCv: action.payload
      };

    case UPDATE_CV:
      return {
        ...state,
        profileCv: action.payload
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case MESSAGES:
      return {
        ...state,
        clientMessage: action.payload
      };

    case CLEAR_CURRENT:
    case FETCH_ERROR:
      return {
        ...state,
        current: null,
        error: action.payload
      };

     

    default:
      return state;
  }
};

export default adminReducer;
