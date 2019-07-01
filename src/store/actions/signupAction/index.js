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
  let x = document.getElementById("errors");
  x.style.color = "#36C";
  x.style.borderRadius = "0.8rem"
  x.style.border = "1px #36C solid"
  x.innerHTML = "Loading....";
  return axios.post(url, JSON.stringify(userData), axiosSignConfig)
    .then((response) => {
      dispatch(signUp(userData));
      let x = document.getElementById("errors");
      x.style.color = "#0a0";
      x.style.borderRadius = "0.8rem"
      x.style.border = "1px #0a0 solid"
      x.innerHTML = "Sign up successfully, proceed to login";
      window.location = `/login`;
    }).catch((error) => {
      let x = document.getElementById("errors");
      x.style.borderRadius = "0.8rem"
      x.style.border = "1px #C00 solid"
      x.style.color = "#C00";
      x.innerHTML = error.response.data.message.error;
    });
};