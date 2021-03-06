import { Navigate, useLocation } from "react-router-dom";
import React from "react";

export default ({children}) => {
    const location = useLocation();
    const info = localStorage.getItem("nome");

    if (!info)
        return <Navigate to="/login" replace state={{ from: location }}/>;

    return children;
}