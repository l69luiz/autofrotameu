// src/pages/Clientes.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Cliente {
  idCliente: number;
  Nome: string;
  Email: string;
  Celular: string;
  // Adicione outros campos do cliente conforme necessário
}

const Clientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState<string>('');

  // Requisição GET para a API quando o componente for montado
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/auth/clientes', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Se você precisar do token
          },
        });
        setClientes(response.data); // Armazena os dados dos clientes na variável de estado
      } catch (error) {
        setError('Erro ao carregar os clientes.');
        console.error(error);
      }
    };

    fetchClientes(); // Chama a função para fazer a requisição
  }, []); // O array vazio [] garante que a requisição seja feita uma vez quando o componente for montado

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>
      
      {error && <p className="text-red-500">{error}</p>} {/* Exibe a mensagem de erro, se houver */}
      
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nome</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Celular</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 ? (
              clientes.map((cliente) => (
                <tr key={cliente.idCliente}>
                  <td className="px-4 py-2 border">{cliente.idCliente}</td>
                  <td className="px-4 py-2 border">{cliente.Nome}</td>
                  <td className="px-4 py-2 border">{cliente.Email}</td>
                  <td className="px-4 py-2 border">{cliente.Celular}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-2 border text-center">Nenhum cliente encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clientes;
