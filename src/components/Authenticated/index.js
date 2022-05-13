import { Navigate, useLocation } from "react-router-dom";

export default ({children}) => {
    const nome = localStorage.getItem("nome");
    const location = useLocation();

    if (nome)
        return <Navigate to="/inicio" replace state={{ from: location }}/>;

    return children;
}