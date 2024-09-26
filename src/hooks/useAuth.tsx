/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function useAuth() {
  const getToken = () => {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      return userInfo?.token;
    }
  };
  const [token, setToken] = useState(getToken());

  const login = (userInfo: any) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setToken(userInfo.token);
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setToken(null);
  };

  return {
    token,
    login,
    logout,
  };
}
