import { GET_PROFILE, POST_MESSAGE, FETCH_ERROR, CLEAR_ERROR } from '../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    case POST_MESSAGE:
      
      return {
        ...state,
        message: action.payload
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case CLEAR_ERROR:
      
      return {
        ...state,
        error: null,
        message: null
      };
    default:
      return state;
  }
};

export default GithubReducer;
