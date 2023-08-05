import React from 'react'

import { Navigate } from 'react-router-dom';
const PrivateRoute = ({login, children}) => {

  
    if(login)
    {
        return children;
    }
  else{
     return <Navigate to="/login"></Navigate>
  }
   
 
}

export default PrivateRoute