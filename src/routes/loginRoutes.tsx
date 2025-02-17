import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home'; // Página que será exibida após o login
import ProtectedRoute from '../components/ProtectedRoute'; // Rota protegida

const loginRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
      </Routes>
    </Router>
  );
};

export default loginRoutes;
