import axios from 'axios';

import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { API } from '../../config';

const authenticate = ({ email, password }, type) => {
  if (type !== 'signin' && type !== 'signup') {
    console.log('wrong api call', email, password);
    return;
  }
  return (dispatch) => {
    axios.post(`${API}/${type}`, { email, password })
      .then((response) => {
        console.log(response.data.token);
        dispatch({type: AUTHENTICATE, payload: response.data.token});
      })
      .catch((err) => {
        console.log(err, `${API}/${type}`);
      });
  };
};

const deauthenticate = () => {
  return (dispatch) => {
    dispatch({type: DEAUTHENTICATE});
  };
};


export default {
  authenticate,
  deauthenticate,
};
