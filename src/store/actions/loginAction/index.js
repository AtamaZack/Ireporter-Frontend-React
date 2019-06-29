// third-party libraries
import axios from 'axios';
import { baseURL, axiosSignConfig } from '../../../utils';

// action types
import {
  LOGIN,
} from '../types';


export const loginUser = userData => ({ userData, type: LOGIN });


export const login = userData => (dispatch) => {
  const url = `${baseURL}${'/auth/login'}`;
  return axios.post(url, JSON.stringify(userData), axiosSignConfig)
    .then((response) => {
      dispatch(loginUser(userData));
      sessionStorage.setItem('iReporterToken', response.data.access_token)
      window.location = `/new_redflag`;
    }).catch((error) => {
      console.log(error);
    });
};