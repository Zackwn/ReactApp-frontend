import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import MainRoutes from "./routes"

ReactDOM.render(
  <React.StrictMode>  
    <Router>
      <MainRoutes/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
