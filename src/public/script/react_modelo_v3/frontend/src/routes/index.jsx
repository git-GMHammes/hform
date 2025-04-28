// src\public\script\react_modelo_v3\frontend\src\routes\index.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import FormularioBootstrap from '../pages/FormularioBootstrap';
import FormularioHformConfig from '../pages/FormularioHformConfig';
import ContactWhatsapp from '../pages/ContactWhatsapp';
import PosicaoMouse from '../pages/AppModelReact';
import TamanhoTela from '../pages/AppModelReact';

const AppRoutes = () => {
return (
<Routes>
  {/* Rotas publicas */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />

  {/* Rotas publicas */}
  <Route path="/formulario/config/:param1/:param2/:param3" element={<FormularioHformConfig />} />
  <Route path="/formulario/config/:param1/:param2" element={<FormularioHformConfig />} />
  <Route path="/formulario/config/:param1" element={<FormularioHformConfig />} />
  <Route path="/formulario/config" element={<FormularioHformConfig />} />
  <Route path="/formulario/teste" element={<FormularioBootstrap />} />

  {/* Rota de redirecionamento */}
  <Route path="/contact" element={<ContactWhatsapp />} />

  {/* Rota de Posição e Mouse */}
  <Route path="/posicao/mouse" element={<PosicaoMouse />} />
  <Route path="/tamanho/tela" element={<TamanhoTela />} />

  
  {/* Rota de fallback */}
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
  );
};

export default AppRoutes;
