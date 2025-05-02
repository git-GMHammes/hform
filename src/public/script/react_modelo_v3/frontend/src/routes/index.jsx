// src\public\script\react_modelo_v3\frontend\src\routes\index.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import FormBootstrap from '../pages/FormBootstrap';
import FormHformConfig from '../pages/FormHformConfig';
import HpWhatsapp from '../pages/HpWhatsapp';
import PosicaoMouse from '../pages/HpModelReact';
import TamanhoTela from '../pages/HpModelReact';

const AppRoutes = () => {
return (
<Routes>
  {/* Rotas publicas */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />

  {/* Rotas publicas */}
  <Route path="/formulario/config/:param1/:param2/:param3" element={<FormHformConfig />} />
  <Route path="/formulario/config/:param1/:param2" element={<FormHformConfig />} />
  <Route path="/formulario/config/:param1" element={<FormHformConfig />} />
  <Route path="/formulario/config" element={<FormHformConfig />} />
  <Route path="/formulario/teste" element={<FormBootstrap />} />

  {/* Rota de redirecionamento */}
  <Route path="/contact" element={<HpWhatsapp />} />

  {/* Rota de Posição e Mouse */}
  <Route path="/posicao/mouse" element={<PosicaoMouse />} />
  <Route path="/tamanho/tela" element={<TamanhoTela />} />

  
  {/* Rota de fallback */}
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
  );
};

export default AppRoutes;
