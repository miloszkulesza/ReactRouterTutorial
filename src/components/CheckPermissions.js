import React from 'react';
import { Navigate } from 'react-router-dom';

const CheckPermissions = (props) => {
    if(props.permissions)
        return <Navigate to="/admin" replace />;
    else
        return <Navigate to="/login" replace />;
}
 
export default CheckPermissions;