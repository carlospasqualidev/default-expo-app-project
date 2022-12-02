import axios from 'axios';

export const Api = axios.create({
  baseURL: 'http://192.168.0.68:8080/api/backoffice',
  headers: {
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept-Encondig': 'gzip, deflate, br',
  },
});
