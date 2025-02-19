import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Ensuring Router wraps the app
import { SpeedInsights } from "@vercel/speed-insights/react";
import { App } from './pages/App';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
    <SpeedInsights />
  </React.StrictMode>
);
