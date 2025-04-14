// src\public\script\react_modelo_v3\frontend\src\routes\index.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import FormularioBootstrap from '../pages/FormularioBootstrap';
import FormularioHformConfig from '../pages/FormularioHformConfig';

const AppRoutes = () => {
return (
    <Routes>
      {/* Rotas publicas */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Rotas publicas */}
      <Route path="/formulario/teste" element={<FormularioBootstrap />} />
      <Route path="/formulario/config" element={<FormularioHformConfig />} />

      {/* Rota de redirecionamento */}
      
      {/* Rota de fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
