import { GET_CV } from '../types';

const clientReducer = (state, action) => {
  switch (action.type) {
    case GET_CV:
      return action.payload;

    default:
      return state;
  }
};

export default clientReducer;
