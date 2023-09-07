import axios from 'axios';
import { getCookie } from '../utils/ReactCookie';

// const { createProxyMiddleware } = require("http-proxy-middleware");

// createProxyMiddleware({
//   target: "http://localhost:5000",
//   changeOrigin: true,
// });

axios.defaults.headers['Authorization'] = getCookie('token');

// const baseURL = process.env.REACT_APP_BASE_URL ?? "";
const baseURL = 'http://api.playlist.10duck.kr:9124/';

const defaultClient = axios.create({
  baseURL,
});

export default defaultClient;
