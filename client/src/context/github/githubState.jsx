import React, { useReducer } from 'react';
import GithubContext from './githhubContext';
import reducer from './githubReducer';
import { GET_PROFILE, POST_MESSAGE, FETCH_ERROR ,CLEAR_ERROR} from '../types';
import axios from 'axios';

const GithubState = props => {
  const initialState = {
    profile: null,
    message: null,
    error: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //?get github

  const githubProfile = async () => {
    try {
      const res = await axios.get(
        'https://cors-anywhere.herokuapp.com/' +
          'https://api.github.com/users/tohshine'
      );

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //?client post message

  const sendMessage = async messageForm => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/client/cv', messageForm, config);
      dispatch({
        type: POST_MESSAGE,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data
      });
    }
  };

  //?clear Errors
  const  clearError= ()=>{
    dispatch({
      type:CLEAR_ERROR
    })
  }
  //?clear Message
  const  clearMessage= ()=>{
    dispatch({
      type:CLEAR_ERROR
    })
  }

  return (
    <GithubContext.Provider
      value={{
        profile: state.profile,
        messages: state.message,
        error: state.error,
        githubProfile,
        sendMessage,
        clearError,
        clearMessage
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
