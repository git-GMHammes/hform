import './App.css';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { HashRouter, useEffect, Header, NavMenu, Footer, AppRoutes } from './components';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-black', 'text-white');
    document.documentElement.setAttribute('data-bs-theme', 'dark');

  }, []);

  return (
    <HashRouter>
      <div className="app-container bg-black text-white">
        <Header />
        <NavMenu />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );

}

export default App;
