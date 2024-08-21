import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

function RequireAuth({ children }) {
   let location = useLocation();

   const token = localStorage.getItem("token");
   console.log(token);

   // If there is no token, redirect to login
   if (!token) {
      localStorage.clear();
      sessionStorage.clear();
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   // Decode the token
   const decodedToken = jwt_decode(token);
   const dateNow = new Date();

   // Save user information to localStorage
   localStorage.setItem("user", JSON.stringify(decodedToken));

   // Check if the token has expired
   if (decodedToken.exp * 1000 < dateNow.getTime()) {
      localStorage.clear();
      sessionStorage.clear();
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   // If authenticated, allow access to the children components
   return children;
}

export default RequireAuth;
