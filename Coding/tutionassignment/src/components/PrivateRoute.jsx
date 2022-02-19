import React from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from "./Context/userContext";

export const PrivateRoute = ({ children }) => {
    
    const { user } = React.useContext(UserContext);
    
    if (!user.token) {
       return <Navigate to={"/login"}></Navigate>
    } else {
        return children;
    }
}