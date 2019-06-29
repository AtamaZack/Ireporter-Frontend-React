// third-party libraries
import axios from 'axios';
import { baseURL, axiosSignConfig } from '../../../utils';

// action types
import {
  SIGNED_UP,
} from '../types';


export const signUp = userData => ({ userData, type: SIGNED_UP });


export const newUser = userData => (dispatch) => {
  const url = `${baseURL}${'/auth/sign_up'}`;
  return axios.post(url, JSON.stringify(userData), axiosSignConfig)
    .then((response) => {
      dispatch(signUp(userData));
      window.location = `/auth/login`;
    }).catch((error) => {
      console.log(error);
    });
};