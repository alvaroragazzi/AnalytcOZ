import { Navigate, useLocation } from "react-router-dom";

export default({children}) => {
    const token = localStorage.getItem("token");
    const location = useLocation();

    if (token)
        return <Navigate to="/inicio" replace state={{ from: location }}/>;

    return children;
}