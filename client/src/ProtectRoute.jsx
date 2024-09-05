import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('username');

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectRoute;
