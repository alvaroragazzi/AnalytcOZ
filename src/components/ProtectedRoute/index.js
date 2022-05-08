import { Navigate, useLocation } from "react-router-dom";

export default({children}) => {
    const token = localStorage.getItem("token");
    const location = useLocation();

    if (!token)
        return <Navigate to="/login" replace state={{ from: location }}/>;

    return children;
}