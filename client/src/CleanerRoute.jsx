import React from 'react'
import { Navigate } from 'react-router-dom';

const CleanerRoute = ({children}) => {
    const isAuthenticated = localStorage.removeItem('username');

    return <Navigate to="/" />;
}

export default CleanerRoute
