/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";

export default () => {
    React.useEffect(() => {
        document.title = "AnalytcOZ";
    }, []);

    return (
        <div>
             <Navbar/>

        </div>
    );
}