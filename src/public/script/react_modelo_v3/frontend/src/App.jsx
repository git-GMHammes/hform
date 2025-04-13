// src\public\script\react_modelo_v3\frontend\src\App.jsx
import { HashRouter } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-black', 'text-white');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }, []);

  return (
    <HashRouter>
      <div className="app-container bg-black text-white">
        <Header />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
