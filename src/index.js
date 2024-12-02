import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';

const ThemeConext = createContext() 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeConext.Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ThemeConext.Provider>
);
