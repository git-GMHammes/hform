import React from 'react';

const About = () => {
  return (
    <>
      {/* --- */}
      <div className="container mt-4">
        <h2 className="mb-4">Sistemas de Geração Automática de Formulários</h2>
        <p className="lead">
          Existem sistemas e abordagens para gerar formulários automaticamente a partir da estrutura de tabelas em um banco de dados. Essa é uma forma eficiente de criar interfaces de coleta de dados que refletem diretamente o esquema do seu banco.
        </p>

        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h3 className="card-title h5 mb-0">1. Frameworks e Bibliotecas de Desenvolvimento Web</h3>
          </div>
          <div className="card-body">
            <p>
              Muitos frameworks de desenvolvimento web oferecem funcionalidades ou extensões para automatizar a criação de formulários com base em modelos de dados (que muitas vezes correspondem às tabelas do banco).
            </p>

            <div className="mb-4">
              <h4 className="h6 fw-bold">Django (Python)</h4>
              <p>O Django possui um ORM (Object-Relational Mapper) que permite definir modelos de dados em Python. A partir desses modelos, o Django pode gerar formulários automaticamente. A classe ModelForm é a principal ferramenta para isso.</p>
              <div className="bg-secondary p-3 rounded">
                <pre className="mb-0"><code className="text-dark">{`from django import forms
from .models import MeuModelo

class MeuForm(forms.ModelForm):
    class Meta:
        model = MeuModelo
        fields = '__all__' # Ou especifique os campos desejados`}</code></pre>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="h6 fw-bold">Ruby on Rails (Ruby)</h4>
              <p>O Rails também possui um ORM chamado ActiveRecord. Ele pode gerar formulários com base nas suas "models" (que representam as tabelas do banco). Os "form helpers" do Rails facilitam essa criação.</p>
              <div className="bg-secondary p-3 rounded">
                <pre className="mb-0"><code className="text-dark">{`<%= form_with model: @meu_modelo do |form| %>
  <% @meu_modelo.attributes.each do |attribute, value| %>
    <%= form.label attribute.humanize %>
    <%= form.text_field attribute %>
  <% end %>
  <%= form.submit %>
<% end %>`}</code></pre>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="h6 fw-bold">Laravel (PHP)</h4>
              <p>O Laravel também utiliza um ORM chamado Eloquent. Embora não tenha uma geração automática de formulários tão direta quanto o Django, você pode usar os metadados dos seus "models" para construir formulários dinamicamente com as "Blade templates".</p>
              <div className="bg-secondary p-3 rounded">
                <pre className="mb-0"><code className="text-dark">{`<form method="POST" action="/meus-modelos">
    @csrf
    @foreach ($model->getFillable() as $attribute)
        <div>
            <label for="{{ $attribute }}">{{ Str::headline($attribute) }}</label>
            <input type="text" name="{{ $attribute }}" id="{{ $attribute }}">
        </div>
    @endforeach
    <button type="submit">Salvar</button>
</form>`}</code></pre>
              </div>
            </div>

            <p>
              <strong>Outros Frameworks:</strong> Outros frameworks como Spring (Java), ASP.NET Core (C#) e frameworks JavaScript (como Angular e React com bibliotecas de gerenciamento de estado) também oferecem maneiras de vincular modelos de dados a formulários, embora a geração totalmente automática possa exigir mais configuração ou bibliotecas de terceiros.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h3 className="card-title h5 mb-0">2. Ferramentas de Low-Code/No-Code</h3>
          </div>
          <div className="card-body">
            <p>
              Plataformas de low-code e no-code frequentemente oferecem a capacidade de conectar-se a bancos de dados existentes e gerar formulários automaticamente com base nas tabelas. Exemplos incluem:
            </p>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>AppSheet (Google):</strong> Permite criar aplicativos (incluindo formulários) diretamente de planilhas (Google Sheets, Excel) ou bancos de dados na nuvem.
              </li>
              <li className="list-group-item">
                <strong>Retool:</strong> Uma plataforma para construir ferramentas internas rapidamente, conectando-se a diversas fontes de dados e gerando interfaces de usuário, incluindo formulários.
              </li>
              <li className="list-group-item">
                <strong>OutSystems, Mendix, Power Apps (Microsoft):</strong> Essas plataformas mais robustas também oferecem recursos para modelar dados e gerar interfaces de usuário, incluindo formulários, a partir desses modelos.
              </li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h3 className="card-title h5 mb-0">3. Ferramentas de Administração de Banco de Dados</h3>
          </div>
          <div className="card-body">
            <p>
              Algumas ferramentas de administração de banco de dados podem oferecer funcionalidades básicas para gerar formulários de edição ou inserção de dados diretamente nas tabelas. No entanto, esses formulários geralmente são mais simples e voltados para a administração do banco do que para usuários finais. Exemplos incluem:
            </p>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>phpMyAdmin (para MySQL):</strong> Oferece interfaces para visualizar e editar dados em tabelas, o que pode ser considerado uma forma básica de formulário gerado.
              </li>
              <li className="list-group-item">
                <strong>pgAdmin (para PostgreSQL):</strong> Similar ao phpMyAdmin, permite a manipulação de dados via interface.
              </li>
              <li className="list-group-item">
                <strong>Dbeaver (cliente de banco de dados universal):</strong> Também oferece recursos de edição de dados em tabelas.
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-primary">
            <h3 className="card-title h5 mb-0">Considerações ao Escolher uma Abordagem</h3>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Complexidade do Formulário:</strong> Se você precisa de formulários com lógica complexa, validações personalizadas, layouts elaborados ou integrações específicas, frameworks de desenvolvimento web podem oferecer mais flexibilidade.
              </li>
              <li className="list-group-item">
                <strong>Velocidade de Desenvolvimento:</strong> Ferramentas low-code/no-code podem ser significativamente mais rápidas para prototipagem e criação de formulários simples a médios.
              </li>
              <li className="list-group-item">
                <strong>Necessidade de Personalização:</strong> Frameworks oferecem maior controle sobre a aparência e o comportamento dos formulários.
              </li>
              <li className="list-group-item">
                <strong>Integração com Outros Sistemas:</strong> Considere como o formulário precisará se integrar com outros sistemas ou fluxos de trabalho.
              </li>
              <li className="list-group-item">
                <strong>Conhecimento Técnico da Equipe:</strong> A escolha da ferramenta deve levar em conta a expertise da sua equipe de desenvolvimento.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="container mt-4">
        <div className="container-fluid mt-4 text-light">
          <h2 className="mb-4">MVP: Sistema de Geração Automática de Formulários</h2>
          <div className="card bg-dark mb-4 border-secondary">
            <div className="card-header bg-primary">
              <h2 className="h4 mb-0">1. Visão Geral</h2>
            </div>
            <div className="card-body">
              <p>
                Este documento descreve o Produto Mínimo Viável (MVP) para implementação de um sistema de geração automática de formulários baseado na estrutura de tabelas do banco de dados. O sistema permitirá criar interfaces de usuário dinâmicas que refletem diretamente o esquema do banco de dados, acelerando o desenvolvimento e mantendo a consistência entre dados e interface.
              </p>
            </div>
          </div>

          <div className="card bg-dark mb-4 border-secondary">
            <div className="card-header bg-primary">
              <h2 className="h4 mb-0">2. Stack Tecnológica</h2>
            </div>
            <div className="card-body">
              <h3 className="text-primary h5">Backend</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong>CodeIgniter</strong>: Framework PHP para desenvolvimento do backend, criação da API REST e implementação dos modelos e controladores
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Implementação dos endpoints para expor metadados das tabelas
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Desenvolvimento dos controllers para processamento e persistência dos dados
                </li>
              </ul>

              <h3 className="text-primary h5">Frontend</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong>React</strong>: Biblioteca JavaScript para consumo das APIs e renderização dos formulários dinâmicos
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Componentes reutilizáveis para diferentes tipos de campos
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Gerenciamento de estado para validação e submissão de formulários
                </li>
              </ul>

              <h3 className="text-primary h5">UI/UX</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong>Bootstrap</strong>: Framework CSS para padronização da interface
                  <ul className="mt-2">
                    <li>Utilização dos componentes nativos para manter consistência visual</li>
                    <li>Redução da necessidade de CSS personalizado</li>
                    <li>Facilidade de manutenção a longo prazo</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-dark mb-4 border-secondary">
            <div className="card-header bg-primary">
              <h2 className="h4 mb-0">3. Funcionalidades do MVP</h2>
            </div>
            <div className="card-body">
              <h3 className="text-primary h5">3.1 Geração Automática de Formulários</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Análise automática da estrutura das tabelas do banco de dados
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Mapeamento de tipos de dados para componentes de formulário apropriados:
                  <ul className="mt-2">
                    <li>VARCHAR/TEXT → Campo de texto</li>
                    <li>INT/FLOAT → Campo numérico</li>
                    <li>DATE/DATETIME → Seletor de data/hora</li>
                    <li>BOOLEAN → Checkbox</li>
                    <li>ENUM/SET → Select dropdown</li>
                    <li>Chaves estrangeiras → Select dropdown com valores relacionados</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-primary h5">3.2 API REST (CodeIgniter)</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Endpoints para obtenção de metadados das tabelas
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Endpoints para CRUD (Create, Read, Update, Delete)
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Validação de dados no backend
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Autenticação e autorização básicas
                </li>
              </ul>

              <h3 className="text-primary h5">3.3 Frontend (React)</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Componente principal de formulário dinâmico
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Renderização condicional baseada nos tipos de campo
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Validação frontend em tempo real
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Gestão de submissão e feedback ao usuário
                </li>
              </ul>

              <h3 className="text-primary h5">3.4 Personalização Básica</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Possibilidade de ocultar campos específicos
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Opção para alterar a ordem dos campos
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Configuração básica de labels e placeholders
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-dark mb-4 border-secondary">
            <div className="card-header bg-primary">
              <h2 className="h4 mb-0">4. Fluxo de Funcionamento</h2>
            </div>
            <div className="card-body">
              <ol className="list-group list-group-numbered bg-dark">
                <li className="list-group-item bg-dark text-light border-secondary">
                  O sistema consulta metadados das tabelas via API
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  O componente React recebe os metadados e renderiza o formulário correspondente
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  O usuário preenche os dados com validação em tempo real
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Ao submeter, os dados são enviados para o backend via API REST
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  O backend valida, processa e persiste os dados no banco
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Feedback é retornado ao usuário
                </li>
              </ol>
            </div>
          </div>

          <div className="card bg-dark mb-4 border-secondary">
            <div className="card-header bg-primary">
              <h2 className="h4 mb-0">5. Vantagens da Abordagem</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush bg-dark">
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong className="text-primary">Velocidade de desenvolvimento</strong>: Criação rápida de interfaces CRUD
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong className="text-primary">Consistência</strong>: Garantia que a interface reflete fielmente a estrutura do banco
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong className="text-primary">Manutenibilidade</strong>: Alterações na estrutura do banco são automaticamente refletidas na UI
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong className="text-primary">Padronização</strong>: Interface consistente em toda a aplicação graças ao Bootstrap
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  <strong className="text-primary">Escalabilidade</strong>: Arquitetura que permite expansões futuras
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-dark mb-4 border-secondary">
            <div className="card-header bg-primary">
              <h2 className="h4 mb-0">6. Limitações do MVP</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush bg-dark">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Suporte limitado para relacionamentos complexos (muitos-para-muitos)
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Personalização visual básica dos formulários
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Implementação inicial focada em operações CRUD simples
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-dark mb-4 border-secondary">
            <div className="card-header bg-primary">
              <h2 className="h4 mb-0">7. Roadmap Pós-MVP</h2>
            </div>
            <div className="card-body">
              <h3 className="text-primary h5">Fase 1: Aprimoramentos Básicos</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Melhorias na validação de dados
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Suporte a máscaras de entrada
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Temas e personalização visual avançada
                </li>
              </ul>

              <h3 className="text-primary h5">Fase 2: Recursos Avançados</h3>
              <ul className="list-group list-group-flush bg-dark mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Formulários com múltiplas etapas (wizard)
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Suporte a uploads de arquivos
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Campos condicionais (aparecem/desaparecem baseados em regras)
                </li>
              </ul>

              <h3 className="text-primary h5">Fase 3: Expansão</h3>
              <ul className="list-group list-group-flush bg-dark">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Editor visual de formulários (drag-and-drop)
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Suporte a workflows personalizados
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Integração com sistemas externos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="container mt-4">
        <div className="container-fluid mt-4 text-light">
          {/* Requisitos Técnicos */}
          <div className="mb-4">
            <div className="bg-primary text-white p-3 rounded-top">
              <h2 className="h4 mb-0">8. Requisitos Técnicos</h2>
            </div>
            <div className="bg-dark p-4 rounded-bottom border border-secondary border-top-0">
              <h3 className="text-primary h5 mt-2">Banco de Dados</h3>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-dark text-light border-secondary">Sistema compatível com MySQL/MariaDB</li>
                <li className="list-group-item bg-dark text-light border-secondary">Acesso a informações de schema (INFORMATION_SCHEMA)</li>
                <li className="list-group-item bg-dark text-light border-secondary">Privilégios para operações CRUD nas tabelas-alvo</li>
              </ul>

              <h3 className="text-primary h5 mt-3">Servidor</h3>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-dark text-light border-secondary">PHP 7.4+ com extensões necessárias para CodeIgniter</li>
                <li className="list-group-item bg-dark text-light border-secondary">Servidor web (Apache/Nginx)</li>
                <li className="list-group-item bg-dark text-light border-secondary">Memória e processamento suficientes para operações de análise de schema</li>
              </ul>

              <h3 className="text-primary h5 mt-3">Cliente</h3>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item bg-dark text-light border-secondary">Navegadores modernos com suporte a ES6+</li>
                <li className="list-group-item bg-dark text-light border-secondary">JavaScript habilitado</li>
              </ul>
            </div>
          </div>

          {/* Métricas de Sucesso */}
          <div className="mb-4">
            <div className="bg-primary text-white p-3 rounded-top">
              <h2 className="h4 mb-0">9. Métricas de Sucesso</h2>
            </div>
            <div className="bg-dark p-4 rounded-bottom border border-secondary border-top-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-light border-secondary">Redução do tempo de desenvolvimento de interfaces CRUD em 70%</li>
                <li className="list-group-item bg-dark text-light border-secondary">Diminuição de bugs relacionados à inconsistência entre banco e frontend</li>
                <li className="list-group-item bg-dark text-light border-secondary">Feedback positivo dos desenvolvedores sobre a facilidade de uso</li>
                <li className="list-group-item bg-dark text-light border-secondary">Feedback positivo dos usuários finais sobre a usabilidade dos formulários gerados</li>
              </ul>
            </div>
          </div>

          {/* Estimativa de Implementação */}
          <div className="mb-4">
            <div className="bg-primary text-white p-3 rounded-top">
              <h2 className="h4 mb-0">10. Estimativa de Implementação</h2>
            </div>
            <div className="bg-dark p-4 rounded-bottom border border-secondary border-top-0">
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item bg-dark text-light border-secondary"><strong>Fase de design e planejamento</strong>: 1-2 semanas</li>
                <li className="list-group-item bg-dark text-light border-secondary"><strong>Desenvolvimento do backend</strong>: 2-3 semanas</li>
                <li className="list-group-item bg-dark text-light border-secondary"><strong>Desenvolvimento do frontend</strong>: 2-3 semanas</li>
                <li className="list-group-item bg-dark text-light border-secondary"><strong>Testes e ajustes</strong>: 1-2 semanas</li>
                <li className="list-group-item bg-dark text-light border-secondary"><strong>Implementação inicial</strong>: 1 semana</li>
              </ul>
              <div className="bg-dark border border-info rounded p-3 text-info">
                <strong>Tempo total estimado</strong>: 7-11 semanas
              </div>
            </div>
          </div>

          {/* Requisitos Funcionais */}
          <div className="mb-4">
            <div className="bg-primary text-white p-3 rounded-top">
              <h2 className="h4 mb-0">11. Requisitos Funcionais</h2>
            </div>
            <div className="bg-dark p-4 rounded-bottom border border-secondary border-top-0">
              <div className="mb-4">
                <h3 className="text-primary h5">1. Análise de Esquema de Banco</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve ler automaticamente a estrutura de tabelas do banco de dados</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve identificar os tipos de dados de cada coluna</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve identificar chaves primárias e estrangeiras</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">2. Geração de Formulários</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve gerar formulários dinamicamente com base na estrutura das tabelas</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve mapear automaticamente tipos de dados para componentes de formulário apropriados</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve permitir a criação, edição, visualização e exclusão de registros (CRUD)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">3. Interface de Usuário</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve exibir os formulários gerados de forma amigável e responsiva</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve permitir navegação entre as tabelas/entidades disponíveis</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve exibir feedback visual sobre erros de validação</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">4. API e Backend</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve fornecer endpoints REST para obter metadados das tabelas</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve fornecer endpoints REST para operações CRUD</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve validar os dados recebidos antes de persistir no banco de dados</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">5. Configuração e Personalização</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve permitir configurar quais tabelas serão expostas como formulários</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve permitir ocultar campos específicos dos formulários</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve permitir reordenar campos nos formulários</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve permitir customizar labels e placeholders dos campos</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">6. Segurança</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve implementar autenticação básica para acesso aos formulários</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve implementar autorização baseada em perfis para operações CRUD</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve sanitizar os dados de entrada para prevenir ataques de injeção</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Requisitos Não Funcionais */}
          <div className="mb-4">
            <div className="bg-primary text-white p-3 rounded-top">
              <h2 className="h4 mb-0">12. Requisitos Não Funcionais</h2>
            </div>
            <div className="bg-dark p-4 rounded-bottom border border-secondary border-top-0">
              <div className="mb-4">
                <h3 className="text-primary h5">1. Desempenho</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O tempo de carregamento inicial dos metadados das tabelas deve ser inferior a 3 segundos</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O tempo de resposta para operações CRUD deve ser inferior a 1 segundo</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve suportar pelo menos 50 usuários simultâneos</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">2. Usabilidade</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">A interface deve seguir os padrões de design do Bootstrap</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve ser responsivo, funcionando em dispositivos móveis e desktop</li>
                  <li className="list-group-item bg-dark text-light border-secondary">A navegação entre formulários deve ser intuitiva</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">3. Confiabilidade</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve manter consistência entre os dados do banco e os formulários</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve tratar erros de forma adequada, fornecendo mensagens claras</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve ter disponibilidade de 99% durante o horário comercial</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">4. Manutenibilidade</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O código deve seguir padrões de codificação para CodeIgniter e React</li>
                  <li className="list-group-item bg-dark text-light border-secondary">A arquitetura deve ser modular, permitindo extensões futuras</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve ter logs adequados para diagnóstico de problemas</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">5. Compatibilidade</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O frontend deve funcionar em navegadores modernos (Chrome, Firefox, Safari, Edge)</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O backend deve ser compatível com MySQL 5.7+ e MariaDB 10.3+</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve funcionar em servidores Linux com PHP 7.4+</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">6. Escalabilidade</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">A arquitetura deve permitir adicionar novas funcionalidades sem reescrever o código existente</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve ser capaz de lidar com bancos de dados com até 100 tabelas</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve manter desempenho adequado com formulários de até 50 campos</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-primary h5">7. Segurança</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve implementar proteção contra ataques CSRF</li>
                  <li className="list-group-item bg-dark text-light border-secondary">As senhas e dados sensíveis devem ser armazenados de forma segura</li>
                  <li className="list-group-item bg-dark text-light border-secondary">O sistema deve utilizar HTTPS para todas as comunicações</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resumo */}
          <div className="mb-4">
            <div className="bg-primary text-white p-3 rounded-top">
              <h2 className="h4 mb-0">Resumo dos Requisitos</h2>
            </div>
            <div className="bg-dark p-4 rounded-bottom border border-secondary border-top-0">
              <h3 className="text-primary h5">Requisitos Funcionais</h3>
              <div className="row mb-4">
                <div className="col-md-4 mb-3">
                  <div className="card bg-dark h-100 border-primary">
                    <div className="card-header bg-dark text-primary border-primary">Análise de Esquema de Banco</div>
                    <div className="card-body">
                      <p className="card-text text-light">Leitura automática da estrutura de tabelas e identificação de tipos de dados, chaves primárias e estrangeiras</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-dark h-100 border-primary">
                    <div className="card-header bg-dark text-primary border-primary">Geração de Formulários</div>
                    <div className="card-body">
                      <p className="card-text text-light">Criação dinâmica baseada na estrutura das tabelas e suporte completo a operações CRUD</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-dark h-100 border-primary">
                    <div className="card-header bg-dark text-primary border-primary">Interface de Usuário</div>
                    <div className="card-body">
                      <p className="card-text text-light">Exibição responsiva e navegação intuitiva entre entidades com feedback visual</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-primary h5">Requisitos Não Funcionais</h3>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card bg-dark h-100 border-info">
                    <div className="card-header bg-dark text-info border-info">Desempenho</div>
                    <div className="card-body">
                      <p className="card-text text-light">Tempo de resposta rápido e suporte a múltiplos usuários simultâneos</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-dark h-100 border-info">
                    <div className="card-header bg-dark text-info border-info">Usabilidade</div>
                    <div className="card-body">
                      <p className="card-text text-light">Design consistente com Bootstrap e comportamento responsivo</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-dark h-100 border-info">
                    <div className="card-header bg-dark text-info border-info">Segurança</div>
                    <div className="card-body">
                      <p className="card-text text-light">Proteção contra ataques e comunicação segura via HTTPS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
    </>
  );
};

export default About;