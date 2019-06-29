import jwt_decode from 'jwt-decode';

export const baseURL = 'https://i-reporter-challenge-4.herokuapp.com/api/v1';



export const axiosSignConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  mode: "cors"
};
