import Cookies from 'js-cookie';

const accessTokenKey = 'crow_access_token';

const refreshTokenKey = 'crow_refresh_token';

const objCookie = {
  expires: 30,
  domain: process.env.COOKIES_DOMAIN,
};

export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookie,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objCookie,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookie,
      path: '/',
      domain: process.env.COOKIES_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookie,
      path: '/',
      domain: process.env.COOKIES_DOMAIN,
    });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
