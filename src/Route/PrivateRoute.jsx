import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authHeader, handleResponse } from '../Services/fack.backend';

const PrivateRoute = () => {
  const login = useState(JSON.parse(localStorage.getItem('login')))[0];
  const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem('token');

  useEffect(() => {
    const requestOptions = { method: 'GET', headers: authHeader() };
    fetch('/users', requestOptions).then(handleResponse);
    setAuthenticated(JSON.parse(localStorage.getItem('authenticated')));

    localStorage.setItem('authenticated', authenticated);
    localStorage.setItem('login', login);
  }, []);
  return login || authenticated || jwt_token ? <Outlet /> : <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />;
};

export default PrivateRoute;
