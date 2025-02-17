//src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa de 'react-dom/client' no React 18
import './index.css';
import App from './App';

// Usa createRoot em vez de render
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

