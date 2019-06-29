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
      window.location = `/red-flags`;
    }).catch((error) => {
      console.log(error);
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
      // console.log(response.data.data);
    }).catch(error => console.log(error));
};
