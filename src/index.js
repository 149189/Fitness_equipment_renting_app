import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './styles.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <BrowserRouter>  {/* Wrap App with BrowserRouter */}
    <App />
  </BrowserRouter>
);
