import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) =>
  // return cookies.set(name, value, { ...option });
  // return cookies.set(name, value, { path: "/" });
  localStorage.setItem(name, value);

export const getCookie = (name) =>
  // return cookies.get(name);
  localStorage.getItem(name);

export const removeCookie = (name) =>
  // return cookies.remove(name);
  localStorage.removeItem(name);
