import React, { useState } from 'react';

function HpTesteRotas() {
  // Estado inicial do formulário
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    texto: ''
  });

  // Estado para mensagens de feedback
  const [mensagem, setMensagem] = useState('Estamos aguardando a sua mensagem!');

  // Função para formatar o número de celular com espaço após o 9
  const formatCelular = (value) => {
    // Remove todos os caracteres não numéricos
    const numeroLimpo = value.replace(/\D/g, '');

    // Aplica a máscara (DD)9 NNNN-NNNN com espaço após o 9
    if (numeroLimpo.length <= 2) {
      return `(${numeroLimpo}`;
    } else if (numeroLimpo.length <= 3) {
      return `(${numeroLimpo.slice(0, 2)})${numeroLimpo.slice(2)}`;
    } else if (numeroLimpo.length <= 7) {
      return `(${numeroLimpo.slice(0, 2)})${numeroLimpo.slice(2, 3)} ${numeroLimpo.slice(3)}`;
    } else if (numeroLimpo.length <= 11) {
      return `(${numeroLimpo.slice(0, 2)})${numeroLimpo.slice(2, 3)} ${numeroLimpo.slice(3, 7)}-${numeroLimpo.slice(7)}`;
    } else {
      // Limita a 11 dígitos (com o 9)
      return `(${numeroLimpo.slice(0, 2)})${numeroLimpo.slice(2, 3)} ${numeroLimpo.slice(3, 7)}-${numeroLimpo.slice(7, 11)}`;
    }
  };

  // Função para manipular mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se for o campo de texto e tiver mais de 100 caracteres, limita
    if (name === 'texto' && value.length > 100) {
      return;
    }
    // Primeiro você define corretamente com formatação
    if (name === 'celular') {
      setFormData({
        ...formData,
        [name]: formatCelular(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

  };

  // Função para quando o campo recebe foco
  const handleFocus = (e) => {
    const { name } = e.target;

    switch (name) {
      case 'nome':
        setMensagem('Digite seu nome completo');
        break;
      case 'celular':
        setMensagem('Digite seu número de celular com DDD');
        break;
      case 'texto':
        setMensagem('Digite seu texto (máximo 100 caracteres)');
        break;
      default:
        setMensagem('');
    }
  };

  // Função para quando o campo perde o foco
  const handleBlur = () => {
    setMensagem('Estamos aguardando a sua mensagem!');
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtém os dados do formulário
    const { nome, celular, texto } = formData;

    // Remove caracteres especiais do celular (mantendo apenas números)
    const numeroLimpo = celular.replace(/\D/g, '');

    // Adiciona o código do país (55 para Brasil) se não estiver presente
    const numeroCompleto = numeroLimpo.startsWith('55')
      ? numeroLimpo
      : `55${numeroLimpo}`;

    // Monta a mensagem personalizada conforme solicitado
    const mensagemPersonalizada = `Olá, Meu nome é *${nome}*, gostaria de saber mais sobre o *HForm* (Gerenciador de formlários, baseado em tabelas de bancos de dados), entre em contato com o meu celular ${celular}. ${texto} terminando a mensagem`;

    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagemPersonalizada);

    // Cria o link do WhatsApp com seu número fixo
    const linkWhatsapp = `https://wa.me/5521988253970?text=${mensagemCodificada}`;
    // const linkWhatsapp = `https://wa.me/5521980558545?text=${mensagemCodificada}`;
    // const linkWhatsapp = `https://wa.me/5521993220025?text=${mensagemCodificada}`;

    // Abre em um popup com tamanho e propriedades específicas
    const popupWidth = 600;
    const popupHeight = 650;
    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;

    const popup = window.open(
      linkWhatsapp,
      'WhatsAppMessage',
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`
    );

    // Foca no popup (para alguns navegadores)
    if (popup) {
      popup.focus();
    }

    // Limpa o formulário
    setFormData({
      nome: '',
      celular: '',
      texto: ''
    });

    console.log('Dados enviados para o WhatsApp via popup:', numeroCompleto, mensagemPersonalizada);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Formulário de Contato</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {mensagem && (
                  <div className="alert alert-info mb-3">
                    <i class="bi bi-whatsapp me-2"></i>{mensagem}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Digite seu nome"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="celular" className="form-label">Celular</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="texto" className="form-label">Texto</label>
                  <textarea
                    className="form-control"
                    id="texto"
                    name="texto"
                    rows="3"
                    value={formData.texto}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Digite seu texto"
                    maxLength={100}
                    required
                  ></textarea>
                  <div className="form-text text-muted d-flex justify-content-end">
                    {formData.texto.length}/100 caracteres
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HpTesteRotas;