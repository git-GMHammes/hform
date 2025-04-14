// src\public\script\react_modelo_v3\frontend\src\pages\FormularioBootstrap\index.jsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import HformInputTextMask from '../../components/HForm/HformInputTextMask';
import HformInputTextLetters from '../../components/HForm/HformInputTextLetters';
import HformInputTextNumber from '../../components/HForm/HformInputTextNumber';

const FormularioBootstrap = () => {
    // Inicialização do react-hook-form com valores padrão
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            nome: 'Gustavo Hammes',
            endereco: 'Estrada de Cima com a Rua de Baixo',
            cpf: '123.123.123-12',
            cnpj: '12.345.678/0001-12',
            telefoneFixo: '(21)1234-5678',
            telefoneCelular: '(21)91234-5678',
            observacoes: 'Qualquer observação',
            campoMascara: '123.456.789/123.456',
            mascaraCustomizada: '123.456.789-12',
            campoCustomizado: 'Esse texto não possui caracter especial',
            numeroInteiro: '123',
            numeroDecimal: '123,45',
            valorMonetario: '123,45',
            numeroPersonalizado: '123.123,12',
        }
    });

    const {
        handleSubmit,
        getValues,
    } = methods;

    // Função de submissão do formulário completo
    const onSubmitCompleto = (data) => {
        console.log('Formulário Completo:', JSON.stringify(data, null, 2));
    };

    // Funções de submissão para os diferentes filtros
    const onSubmitFiltro1 = () => {
        // Pega apenas os campos relevantes para o Filtro 1
        const filteredData = {
            nome: getValues('nome'),
            cpf: getValues('cpf'),
            telefoneFixo: getValues('telefoneFixo')
        };
        console.log('Filtro 1 (Dados Pessoais):', JSON.stringify(filteredData, null, 2));
    };

    const onSubmitFiltro2 = () => {
        // Pega apenas os campos relevantes para o Filtro 2
        const filteredData = {
            cnpj: getValues('cnpj'),
            valorMonetario: getValues('valorMonetario'),
            numeroDecimal: getValues('numeroDecimal')
        };
        console.log('Filtro 2 (Dados Financeiros):', JSON.stringify(filteredData, null, 2));
    };

    const onSubmitFiltro3 = () => {
        // Pega apenas os campos relevantes para o Filtro 3
        const filteredData = {
            endereco: getValues('endereco'),
            telefoneCelular: getValues('telefoneCelular'),
            numeroInteiro: getValues('numeroInteiro')
        };
        console.log('Filtro 3 (Dados de Contato):', JSON.stringify(filteredData, null, 2));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h2 className="mb-0">Formulário com React HForm</h2>
                        </div>
                        <div className="card-body">
                            {/* FormProvider envolve todo o formulário para compartilhar o contexto */}
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo de nome usando tipoTexto="Nome" */}
                                    <HformInputTextLetters
                                        name="nome"
                                        label="Nome Completo:"
                                        accessKey="n"
                                        required={true}
                                        tabIndex="1"
                                        tipoTexto="Nome"
                                        autoFocus={false}
                                        maxLength="100"
                                        minLength="3"
                                        dataListOptions={["Maria da Silva", "João d'Avilla"]}
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo de endereço usando tipoTexto="Endereco" */}
                                    <HformInputTextLetters
                                        name="endereco"
                                        label="Endereço Completo:"
                                        accessKey="e"
                                        required={true}
                                        tabIndex="2"
                                        tipoTexto="Endereco"
                                        maxLength="200"
                                        minLength="5"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Exemplo com máscara de CPF usando tipoMask="CPF" */}
                                    <HformInputTextMask
                                        name="cpf"
                                        label="CPF:"
                                        accessKey="c"
                                        required={true}
                                        tabIndex="2"
                                        tipoMask="CPF"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Exemplo com máscara de CNPJ usando tipoMask="CNPJ" */}
                                    <HformInputTextMask
                                        name="cnpj"
                                        label="CNPJ:"
                                        accessKey="j"
                                        readOnly={false}
                                        tabIndex="3"
                                        tipoMask="CNPJ"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Exemplo com máscara de telefone fixo */}
                                    <HformInputTextMask
                                        name="telefoneFixo"
                                        label="Telefone Fixo:"
                                        accessKey="f"
                                        required={true}
                                        tabIndex="4"
                                        tipoMask="TelefoneFixo"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Exemplo com máscara de telefone celular */}
                                    <HformInputTextMask
                                        name="telefoneCelular"
                                        label="Telefone Celular:"
                                        accessKey="t"
                                        disabled={false}
                                        tabIndex="5"
                                        tipoMask="TelefoneCelular"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo de observações usando tipoTexto="Livre" (padrão) */}
                                    <HformInputTextLetters
                                        name="observacoes"
                                        label="Observações:"
                                        accessKey="o"
                                        tabIndex="3"
                                        tipoTexto="Livre"
                                        maxLength="500"
                                        placeholder="Digite suas observações aqui..."
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Exemplo com a máscara padrão usando tipoMask="Padrao" */}
                                    <HformInputTextMask
                                        name="campoMascara"
                                        label="Campo com Máscara Padrão (NNN.NNN.NNN/NNN.NNN):"
                                        accessKey="m"
                                        required={true}
                                        tabIndex="1"
                                        tipoMask="Padrao"
                                        dataListOptions={["123.456.789/123.456"]}
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Exemplo de máscara personalizada (com sobrescrita) */}
                                    <HformInputTextMask
                                        name="mascaraCustomizada"
                                        label="Máscara Personalizada (com parâmetros customizados):"
                                        accessKey="p"
                                        placeholder="Formato personalizado"
                                        maxLength="10"
                                        minLength="5"
                                        required={true}
                                        tabIndex="6"
                                        tipoMask="CPF"
                                        pattern=".*"
                                        title="Campo personalizado"
                                        errorMessage="Formato inválido"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo personalizado */}
                                    <HformInputTextLetters
                                        name="campoCustomizado"
                                        label="Campo Personalizado:"
                                        accessKey="p"
                                        required={true}
                                        tabIndex="4"
                                        pattern="[A-Za-z\s]+" // Apenas letras e espaços
                                        title="Campo que aceita apenas letras e espaços"
                                        errorMessage="Digite apenas letras e espaços"
                                        placeholder="Digite apenas letras e espaços"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo para número inteiro usando tipoNumero="Inteiro" */}
                                    <HformInputTextNumber
                                        name="numeroInteiro"
                                        label="Número Inteiro:"
                                        accessKey="i"
                                        required={true}
                                        tabIndex="1"
                                        tipoNumero="Inteiro"
                                        autoFocus={true}
                                        maxLength="20"
                                        minLength="1"
                                        dataListOptions={["123-456", "789"]}
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo para número decimal usando tipoNumero="Decimal" */}
                                    <HformInputTextNumber
                                        name="numeroDecimal"
                                        label="Número Decimal:"
                                        accessKey="d"
                                        required={true}
                                        tabIndex="2"
                                        tipoNumero="Decimal"
                                        maxLength="30"
                                        minLength="1"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo para valor monetário usando tipoNumero="Monetario" */}
                                    <HformInputTextNumber
                                        name="valorMonetario"
                                        label="Valor Monetário (R$):"
                                        accessKey="m"
                                        required={true}
                                        tabIndex="3"
                                        tipoNumero="Monetario"
                                        maxLength="15"
                                        minLength="1"
                                        placeholder="R$ 0,00"
                                    />
                                </form>
                            </FormProvider>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                    {/* Campo personalizado com padrão customizado */}
                                    <HformInputTextNumber
                                        name="numeroPersonalizado"
                                        label="Número Personalizado:"
                                        accessKey="p"
                                        required={false}
                                        tabIndex="4"
                                        pattern="[0-9]+"  // Apenas dígitos
                                        title="Campo que aceita apenas dígitos"
                                        errorMessage="Digite apenas dígitos (0-9)"
                                        placeholder="Ex: 12345"
                                        maxLength="10"
                                    />
                                </form>
                            </FormProvider>
                            <div className="d-flex gap-2 mb-3 mt-4">
                                <FormProvider {...methods}>
                                    <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Enviar Formulário Completo
                                        </button>
                                    </form>
                                </FormProvider>
                                <FormProvider {...methods}>
                                    <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={onSubmitFiltro1}
                                        >
                                            Filtro 1
                                        </button>
                                    </form>
                                </FormProvider>
                                <FormProvider {...methods}>
                                    <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            onClick={onSubmitFiltro2}
                                        >
                                            Filtro 2
                                        </button>
                                    </form>
                                </FormProvider>
                                <FormProvider {...methods}>
                                    <form onSubmit={handleSubmit(onSubmitCompleto)}>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={onSubmitFiltro3}
                                        >
                                            Filtro 3
                                        </button>
                                    </form>
                                </FormProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioBootstrap;