import { Navigate, useLocation } from "react-router-dom";

export default ({children}) => {
    const location = useLocation();
    const info = localStorage.getItem("info");

    if (!info)
        return <Navigate to="/login" replace state={{ from: location }}/>;

    return children;
}