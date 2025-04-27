StyleSheet.css// src\public\script\react_modelo_v3\frontend\src\components\NavMenu\index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavMenu = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const measureWidth = () => {
        return window.innerWidth;
    };

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(measureWidth());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth])

    return (
        <>
            <nav className="navmenu navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {(windowWidth > 991) && (
                            <>
                                <span className="navbar-toggler-icon me-2"></span>
                            </>
                        )}
                        HForm
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Home com submenu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-house me-1"></i>
                                    Home
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/"><i className="bi bi-house-door me-2"></i>Página inicial</Link></li>
                                    <li><Link className="dropdown-item" to="/about"><i className="bi bi-info-circle me-2"></i>Sobre</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/contact"><i className="bi bi-whatsapp me-2"></i>Contato</Link></li>
                                </ul>
                            </li>

                            {/* Configuração com submenu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-gear me-1"></i>
                                    Configuração
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/formulario/config"><i className="bi bi-sliders me-2"></i>Geral</Link></li>
                                    <li><Link className="dropdown-item" to="/formulario/config/param1"><i className="bi bi-tools me-2"></i>Avançado</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/formulario/config/param1/param2"><i className="bi bi-shield-lock me-2"></i>Segurança</Link></li>
                                </ul>
                            </li>

                            {/* Teste com submenu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-bug me-1"></i>
                                    Teste
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/formulario/teste"><i className="bi bi-file-earmark-text me-2"></i>Formulário</Link></li>
                                    <li><Link className="dropdown-item" to="#"><i className="bi bi-table me-2"></i>Tabelas</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#"><i className="bi bi-graph-up me-2"></i>Gráficos</Link></li>
                                </ul>
                            </li>

                            {/* Item desabilitado com ícone */}
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to="#">
                                    <i className="bi bi-lock me-1"></i>
                                    Desabilitado
                                </Link>
                            </li>
                            {/* Item desabilitado com ícone */}
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to="#">
                                    <i className="ps-5 ms-5 bi bi-display me-2"></i>
                                    {windowWidth}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavMenu;