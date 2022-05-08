import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
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
      
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;