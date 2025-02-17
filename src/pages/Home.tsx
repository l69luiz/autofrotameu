// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex">
      {/* Menu Lateral */}
      <div className="w-64 bg-gray-800 text-white h-screen">
        <div className="text-center p-4 text-xl">Menu Lateral</div>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/clientes">Clientes</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/veiculos">Veículos</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/vendas">Vendas</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/financiamentos">Financiamentos</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/contratos">Contratos</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/usuarios">Usuários</Link>
          </li>
        </ul>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-grow p-8">
        <h2 className="text-2xl font-bold">Bem-vindo à Página Inicial</h2>
      </div>
    </div>
  );
};

export default Home;

