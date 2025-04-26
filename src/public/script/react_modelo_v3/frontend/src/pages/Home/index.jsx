import React, { useState, useEffect } from 'react';
import { Database, Layers, Copy, Coffee, Code, BarChart2, Grid } from 'lucide-react';
import dash_001 from '../../assets/images/dash_001.webp';
import dash_002 from '../../assets/images/dash_002.png';
import dash_003 from '../../assets/images/dash_003.png';
import dash_004 from '../../assets/images/dash_004.png';
import script_003 from '../../assets/images/script_003.webp';
import script_004 from '../../assets/images/script_004.webp';
import script_005 from '../../assets/images/script_005.png';
import script_006 from '../../assets/images/script_006.png';
import script_007 from '../../assets/images/script_007.webp';
import script_001 from '../../assets/images/script_001.webp';
import script_002 from '../../assets/images/script_002.webp';
import form_001 from '../../assets/images/form_001.webp';
import form_002 from '../../assets/images/form_002.png';
import form_003 from '../../assets/images/form_003.png';
import form_004 from '../../assets/images/form_004.jpg';
import form_005 from '../../assets/images/form_005.png';
import form_006 from '../../assets/images/form_006.webp';
import form_007 from '../../assets/images/form_007.png';
import form_008 from '../../assets/images/form_008.webp';
import form_009 from '../../assets/images/form_009.webp';
import form_010 from '../../assets/images/form_010.png';
import form_011 from '../../assets/images/form_011.png';
import form_012 from '../../assets/images/form_012.png';
import form_013 from '../../assets/images/form_013.png';
import form_014 from '../../assets/images/form_014.webp';
import form_015 from '../../assets/images/form_015.png';
import form_016 from '../../assets/images/form_016.webp';
import form_017 from '../../assets/images/form_017.png';
import form_018 from '../../assets/images/form_018.webp';
import form_019 from '../../assets/images/form_019.png';
import tab_001 from '../../assets/images/tab_001.png';
import tab_002 from '../../assets/images/tab_002.png';
import tab_003 from '../../assets/images/tab_003.png';
import tab_004 from '../../assets/images/tab_004.png';

const Home = () => {

  // Estado para controlar a imagem atual
  const [currentImageDash, setCurrentImageDash] = useState(dash_001);
  const [currentImageScript, setCurrentImageScript] = useState(script_001);
  const [currentImageForm, setCurrentImageForm] = useState(form_001);
  const [currentImageTab, setCurrentImageTab] = useState(tab_001);

  // Array com todas as imagens importadas
  const imagesTab = [
    tab_001,
    tab_002,
    tab_003,
    tab_004
  ];
  const imagesDash = [
    dash_001,
    dash_002,
    dash_003,
    dash_004
  ];
  const imagesScript = [
    script_001,
    script_002,
    script_003,
    script_004,
    script_005,
    script_006,
    script_007
  ];
  const imagesForm = [
    form_001,
    form_002,
    form_003,
    form_004,
    form_005,
    form_006,
    form_007,
    form_008,
    form_009,
    form_010,
    form_011,
    form_012,
    form_013,
    form_014,
    form_015,
    form_016,
    form_017,
    form_018,
    form_019
  ];

  // Versão simplificada da função que alterna as imagens
  useEffect(() => {
    // Dashboard images
    const dashInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imagesDash.length);
      setCurrentImageDash(imagesDash[randomIndex]);
    }, 3500);
    
    // Script images
    const scriptInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imagesScript.length);
      setCurrentImageScript(imagesScript[randomIndex]);
    }, 5200);
    
    // Form images
    const formInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imagesForm.length);
      setCurrentImageForm(imagesForm[randomIndex]);
    }, 2100);
    
    // Tab images
    const tabInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imagesTab.length);
      setCurrentImageTab(imagesTab[randomIndex]);
    }, 6000);

    // Limpeza de todos os intervalos
    return () => {
      clearInterval(dashInterval);
      clearInterval(scriptInterval);
      clearInterval(formInterval);
      clearInterval(tabInterval);
    };
  }, []);

  return (
    <div className="bg-black h-100">
      {/* Header */}
      <header className="bg-dark text-white py-4 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-4 fw-bold">Gerador Automátoco de Formulários</h1>
              <p className="lead">Revolucione seu desenvolvimento com geração automática de interfaces</p>
            </div>
            <div className="col-md-4 text-end">
              <Database size={48} className="me-2" />
              <Layers size={48} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        {/* Seção Hero */}
        <section className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Automatize sua produtividade</h2>
            <p className="lead mb-4">
              O DevFormPro é um sistema revolucionário que analisa seus scripts SQL e PHP para gerar
              interfaces completas automaticamente, reduzindo semanas de trabalho para minutos.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-sm px-4">Demonstração</button>
              <button className="btn btn-outline-secondary btn-sm px-4">Documentação</button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src={currentImageDash} alt="Dashboard do sistema" className="img-fluid" />
          </div>
        </section>

        {/* Seção de Recursos */}
        <section className="mb-5">
          <h2 className="text-center mb-5">Recursos Avançados</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Code size={48} className="text-primary mb-3" />
                  <h3 className="card-title">Scripts SQL Inteligentes</h3>
                  <p className="card-text">
                    Interpreta estruturas SQL complexas, relacionamentos entre tabelas e chaves estrangeiras
                    para criar formulários coerentes com validações automáticas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Grid size={48} className="text-primary mb-3" />
                  <h3 className="card-title">Grids Dinâmicas</h3>
                  <p className="card-text">
                    Cria visualizações em grid responsivas com recursos de ordenação, filtros e paginação
                    baseados nas suas consultas SQL existentes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Coffee size={48} className="text-primary mb-3" />
                  <h3 className="card-title">Zero Configuração</h3>
                  <p className="card-text">
                    Comece a usar em minutos com configuração automática. O sistema detecta seu ambiente
                    e se adapta para gerar código compatível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Como Funciona */}
        <section className="mb-5 py-5 bg-black rounded">
          <div className="container">
            <h2 className="text-center mb-5">Como Funciona</h2>

            <div className="row align-items-center mb-5">
              <div className="col-md-6 order-md-2">
                <h3>1. Analise seus Scripts</h3>
                <p className="lead">
                  O DevFormPro analisa seus scripts SQL e PHP existentes, identificando tabelas,
                  relacionamentos e regras de negócio automaticamente.
                </p>
                <p>
                  Tecnologias avançadas de parsing interpretam até mesmo os scripts mais complexos,
                  reconhecendo padrões e estruturas importantes para a criação de interfaces eficientes.
                </p>
              </div>
              <div className="col-md-6 order-md-1 text-center">
                <img src={currentImageScript} alt="Script do sistema" className="img-fluid" />
              </div>
            </div>

            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <h3>2. Gere Formulários Inteligentes</h3>
                <p className="lead">
                  Com base na análise, o sistema gera formulários completos com validações,
                  máscaras e campos relacionados automaticamente.
                </p>
                <p>
                  Cada campo é configurado com os tipos de dados adequados, restrições de tamanho e
                  formatação, seguindo as melhores práticas de UX e acessibilidade.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={currentImageForm} alt="Formulario do sistema" className="img-fluid" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 order-md-2">
                <h3>3. Visualize em Grids Dinâmicas</h3>
                <p className="lead">
                  Apresente seus dados em grids interativas com recursos avançados de filtro,
                  ordenação e exportação.
                </p>
                <p>
                  As grids são totalmente responsivas e se adaptam a diferentes dispositivos,
                  mantendo a consistência visual e a usabilidade em qualquer contexto.
                </p>
              </div>
              <div className="col-md-6 order-md-1 text-center">
              <img src={currentImageTab} alt="Script do sistema" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="mb-5">
          <h2 className="text-center mb-5">Benefícios que Transformam seu Desenvolvimento</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <BarChart2 size={30} className="text-primary" />
                </div>
                <div className="ms-3">
                  <h4>Produtividade Aumentada</h4>
                  <p>Reduza o tempo de desenvolvimento em até 80%, concentrando-se apenas nas personalizações necessárias.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <Copy size={30} className="text-primary" />
                </div>
                <div className="ms-3">
                  <h4>Código Consistente</h4>
                  <p>Garanta padrões uniformes em todo o projeto, eliminando inconsistências entre desenvolvedores.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <Database size={30} className="text-primary" />
                </div>
                <div className="ms-3">
                  <h4>Adaptação Instantânea</h4>
                  <p>Ajuste-se rapidamente a mudanças no banco de dados, com regeneração automática de interfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Casos de Uso */}
        <section className="mb-2 bg-secondary text-white p-3 rounded">
          <h2 className="text-center mb-4">Casos de Sucesso</h2>
          <div className="row g-3">
            <div className="col-md-6 mb-1">
              <div className="card bg-white text-dark h-100">
                <div className="card-body">
                  <h4 className="card-title">TechCorp Solutions</h4>
                  <p className="card-text">
                    "Reduzimos nosso ciclo de desenvolvimento em 65% após implementar o DevFormPro.
                    Nossa equipe agora consegue entregar novos módulos em dias, não semanas."
                  </p>
                  <p className="card-text"><small className="text-success text-break fst-italic">Carlos Silva, CTO</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card bg-white text-dark h-100">
                <div className="card-body">
                  <h4 className="card-title">Global Systems</h4>
                  <p className="card-text">
                    "A consistência entre nossas interfaces melhorou drasticamente. O sistema garantiu
                    que todos os formulários seguissem o mesmo padrão, melhorando a experiência do usuário."
                  </p>
                  <p className="card-text"><small className="text-success text-break fst-italic">Ana Martinez, Líder de Desenvolvimento</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-light btn-lg">Ver Mais Casos</button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-1 mb-5">
          <h2 className="display-5 mb-4">Pronto para Revolucionar seu Desenvolvimento?</h2>
          <p className="lead mb-4">
            Comece hoje mesmo a gerar formulários e grids automaticamente a partir dos seus scripts existentes.
          </p>
          <div className="d-flex justify-content-center gap-2 p-2">
            <button className="btn btn-primary btn-lg px-4 py-3">Iniciar Avaliação Gratuita</button>
            <button className="btn btn-outline-primary btn-lg px-2 py-3">Agendar Demonstração</button>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;