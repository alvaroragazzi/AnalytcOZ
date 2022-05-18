/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
    return (
        <div style={{margin: "100px", display: "block"}}>
            <iframe
            title="Faturamento diário"
                src="http://localhost:5000/public/dashboard/289372f0-5050-4815-b867-d49d21ee682d"
                frameborder="0"
                width="1000"
                height="400"
                allowtransparency
            ></iframe>
            <iframe
            title="Faturamento Semanal"
                src="http://localhost:5000/public/dashboard/2d5fb3a0-444e-4384-ac07-c820c117da2f"
                frameborder="0"
                width="1000"
                height="400"
                allowtransparency
            ></iframe>
        </div>

    );
}