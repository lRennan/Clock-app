import React from 'react';
import ReactDOM from 'react-dom/client';  // Modificado para 'react-dom/client'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Criando root com createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
