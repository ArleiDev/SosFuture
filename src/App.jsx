// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroeAtualizacao from './pages/Cadastro-atualizacao';


function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cadastrousuario" element={<CadastroeAtualizacao />} />
        </Routes>
      
    </Router>
  );
}

export default App;
