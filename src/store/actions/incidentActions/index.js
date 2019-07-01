// third-party libraries
import axios from 'axios';
import { baseURL, axiosIncidentConfig } from '../../../utils';

// action types
import {
  NEW_REDFLAG,
  ALL_REDFLAGS
} from '../types';


export const createIncident = redflag => ({ redflag, type: NEW_REDFLAG });
export const allRedflags = redflags => ({ redflags, type: ALL_REDFLAGS });

export const newIncident = redflag => (dispatch) => {
  const url = `${baseURL}${'/incidents/red-flags'}`;
  return axios.post(url, JSON.stringify(redflag), axiosIncidentConfig)
    .then((response) => {
      dispatch(createIncident(redflag));
      let x = document.getElementById("errors");
      x.style.color = "#0a0";
      x.style.borderRadius = "0.8rem"
      x.style.border = "1px #0a0 solid"
      x.innerHTML = "Report successful, proceed to view all your Redflags";
      window.location = `/red-flags`;
    }).catch((error) => {
      let x = document.getElementById("errors");
      x.style.borderRadius = "0.8rem"
      x.style.border = "1px #C00 solid"
      x.style.color = "#C00";
      x.innerHTML = error.response.data.message.error;
    });
};

/**
 * Thunk to fetch Redflags.
 * @return {action} - Redflags
 */
export const getAllRedflags = () => (dispatch) => {
  const url = `${baseURL}${'/incidents/red-flags'}`;
  dispatch(allRedflags());
  return axios.get(url, axiosIncidentConfig)
    .then((response) => {
      dispatch(allRedflags(response.data.data))
    });
};
