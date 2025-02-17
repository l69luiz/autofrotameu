//src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/Clientes';
import Veiculos from './pages/Veiculos';
import Vendas from './pages/Vendas';
import Financiamentos from './pages/Financiamentos';
import Contratos from './pages/Contratos';
import Usuarios from './pages/Usuarios';

const App = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/clientes" element={isAuthenticated ? <Clientes /> : <Login />} />
        <Route path="/veiculos" element={isAuthenticated ? <Veiculos /> : <Login />} />
        <Route path="/vendas" element={isAuthenticated ? <Vendas /> : <Login />} />
        <Route path="/financiamentos" element={isAuthenticated ? <Financiamentos /> : <Login />} />
        <Route path="/contratos" element={isAuthenticated ? <Contratos /> : <Login />} />
        <Route path="/usuarios" element={isAuthenticated ? <Usuarios /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
