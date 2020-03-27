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

const authReducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false
      };

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };

    case RESET_MESSAGE:
      localStorage.removeItem('resetToken');
      return {
        ...state,
        resetMessage: action.payload,
        resetToken: null
      };
    case VERIFY_TOKEN:
      localStorage.setItem('resetToken', action.payload.msg);
      return {
        ...state,
        isValidToken: true,
        resetToken: action.payload.msg
      };

    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        token: null,
        error: action.payload,
        user: null,
        resetMessage: null
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false
      };

    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        token: null,
        error: null,
        user: null
      };

    default:
      return state;
  }
};

export default authReducer;
