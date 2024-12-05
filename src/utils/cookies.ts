import Cookies from 'js-cookie';

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

const defaultOptions: CookieOptions = {
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
};

export const setCookie = (name: string, value: string, options?: CookieOptions) => {
  Cookies.set(name, value, { ...defaultOptions, ...options });
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (name: string, options?: CookieOptions) => {
  Cookies.remove(name, { ...defaultOptions, ...options });
};
