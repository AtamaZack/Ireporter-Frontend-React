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
  let x = document.getElementById("errors");
  x.style.color = "#36C";
  x.style.borderRadius = "0.8rem"
  x.style.border = "1px #36C solid"
  x.innerHTML = "Loading....";
  return axios.post(url, JSON.stringify(userData), axiosSignConfig)
    .then((response) => {
      dispatch(loginUser(userData));
      sessionStorage.setItem('iReporterToken', response.data.access_token)
      x.style.color = "#0a0";
      x.style.borderRadius = "0.8rem"
      x.style.border = "1px #0a0 solid"
      x.innerHTML = "Login successfully, proceed to report a Redflag";
      window.location = `/new_redflag`;
    }).catch((error) => {
      let x = document.getElementById("errors");
      x.style.borderRadius = "0.8rem"
      x.style.border = "1px #C00 solid"
      x.style.color = "#C00";
      x.innerHTML = error.response.data.message.error;
    });
};