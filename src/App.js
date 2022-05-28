import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { checkAuth } from "./services/request";
import React from "react";
import { Spinner } from "react-activity";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function checkIfAuth() {
      const isAuth = await checkAuth();

      if (!isAuth)
        localStorage.removeItem("info");
      
      setLoading(false);
    }

    checkIfAuth();
  }, []);

  return (
    <div>
      <style> 
        {
          `body {
            background: rgb(236,236,236);
            background: linear-gradient(90deg, rgba(236,236,236,1) 0%, rgba(255,255,255,1) 51%, rgba(236,236,236,1) 100%);
          }`
        }
      </style>

      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </head>
        

        {loading ? 
          <div style={{display: "flex",  justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Spinner style={{width: 50, height: 50}}/> 
          </div>
        :
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        }
    </div>
  );
}

export default App;