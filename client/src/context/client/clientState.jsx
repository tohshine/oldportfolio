import React, { useReducer } from 'react';
import clientContext from './clientContext';
import reducer from './clientReducer';
import { GET_CV } from '../types';
import axios from 'axios';

const ClientState = props => {
  const initialState =  null
 
  const [state, dispatch] = useReducer(reducer, initialState);

  //?get cv
  const getCv = async () => {
    try {
      const res = await axios.get('/api/client/cv');
      dispatch({
        type: GET_CV,
        payload: res.data
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <clientContext.Provider value={{ cv: state,getCv }}>
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientState;
