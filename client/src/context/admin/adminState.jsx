import React, { useReducer } from 'react';
import AdminContext from './adminContext';
import adminReducer from './adminReducer';
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
import axios from 'axios';
import Cvform from '../../component/admin/cvform';

const AdminState = props => {
  const initialState = {
    profileCv: null,
    clientMessage: null,
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(adminReducer, initialState);

  //?get cv
  const getCV = async () => {
    try {
      const res = await axios.get('/api/admin/generate');
      dispatch({
        type: GET_CV,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        dispatch: error.response.msg
      });
    }
  };

  //?upload cv
  const upload = async Cvform => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('api/admin/generate', Cvform, config);
      dispatch({
        type: ADD_CV,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data
      });
    }
  };

  //?update cv
  const setUpdate = async cv => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(`/api/admin/generate/${cv._id}`, cv, config);
      dispatch({
        type: UPDATE_CV,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.msg
      });
    }
  };

  //?get client messages

  const Messages = async () => {
    try {
      const res = await axios.get('api/admin/generate/messages');
      dispatch({
        type: MESSAGES,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR
      });
    }
  };

  //?set current
  const setCurrent = cv => {
    dispatch({
      type: SET_CURRENT,
      payload: cv
    });
  };

  //?clear current
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  

  return (
    <div>
      <AdminContext.Provider
        value={{
          profileCv: state.profileCv,
          clientMessage: state.clientMessage,
          current: state.current,
          setCurrent,
          clearCurrent,
          setUpdate,
          getCV,
          upload,
          Messages,
         
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminState;
