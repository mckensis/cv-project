import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './stylesheets/base.css';
import './stylesheets/mobile.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
