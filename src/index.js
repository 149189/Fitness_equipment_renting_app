import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new client API
import './styles.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(<App />); // Render the app within the root
