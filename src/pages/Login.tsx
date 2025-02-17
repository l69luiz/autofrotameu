// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        Email: email,
        Senha: senha,
      });

      const { token } = response.data;

      // Armazenar o token no localStorage
      localStorage.setItem('token', token);

      // Redirecionar para a página inicial
      navigate('/home');
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="senha" className="block mb-2">Senha:</label>
          <input
            type="password"
            id="senha"
            className="border border-gray-300 p-2 w-full"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
