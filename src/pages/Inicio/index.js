/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
    return (
        <div style={{margin: "100px", display: "block"}}>
            
            
            <iframe
            title="Faturamento Diário"
                src="http://analytcoz-metabase.herokuapp.com/public/dashboard/90c6e153-605a-4a68-805a-44a947f19724"
                frameborder="0"
                width="800"
                height="600"
                allowtransparency
>           </iframe>
            <iframe
                title="Faturamento Semanal"
                src="http://analytcoz-metabase.herokuapp.com/public/dashboard/cb9a1f8b-7fdc-42d3-b672-3ca74b81eae0"
                frameborder="0"
                width="800"
                height="600"
                allowtransparency
            ></iframe>
        </div>

    );
}