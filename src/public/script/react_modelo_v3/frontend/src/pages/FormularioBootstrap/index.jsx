import React from 'react';
import { useForm, FormProvider } from 'react-hook-form'; // Importando FormProvider
import HformInputTextMask from '../../components/HForm/HformInputTextMask';
import HformInputTextLetters from '../../components/HForm/HformInputTextLetters';
import HformInputTextNumber from '../../components/HForm/HformInputTextNumber';

const FormularioBootstrap = () => {
    // Inicialização do react-hook-form
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            apenasNumeros: '',
            apenasTexto: '',
            campoMascara: '',
            cpf: '',
            cnpj: '',
            telefoneFixo: '',
            telefoneCelular: '',
            mascaraCustomizada: '',
        }
    });

    const {
        handleSubmit,
    } = methods;

    // Função de submissão do formulário
    const onSubmit = (data) => {
        console.log('Form submitted!', data);
        alert(JSON.stringify(data, null, 2));
    };

    // Função acionadora de evento (pode ser usada com qualquer evento)
    const acaoPersonalizada = (evento) => {
        handleSubmit(onSubmit)();
        console.log(`Formulário submetido por: ${evento}`);
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
                            {/* A solução é envolver todo o formulário com FormProvider */}
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
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

                                    {/* Exemplo com máscara de CPF usando tipoMask="CPF" */}
                                    <HformInputTextMask
                                        name="cpf"
                                        label="CPF:"
                                        accessKey="c"
                                        required={true}
                                        tabIndex="2"
                                        tipoMask="CPF"
                                    />

                                    {/* Exemplo com máscara de CNPJ usando tipoMask="CNPJ" */}
                                    <HformInputTextMask
                                        name="cnpj"
                                        label="CNPJ:"
                                        accessKey="j"
                                        readOnly={false}
                                        tabIndex="3"
                                        tipoMask="CNPJ"
                                    />

                                    {/* Exemplo com máscara de telefone fixo */}
                                    <HformInputTextMask
                                        name="telefoneFixo"
                                        label="Telefone Fixo:"
                                        accessKey="f"
                                        required={true}
                                        tabIndex="4"
                                        tipoMask="TelefoneFixo"
                                    />

                                    {/* Exemplo com máscara de telefone celular */}
                                    <HformInputTextMask
                                        name="telefoneCelular"
                                        label="Telefone Celular:"
                                        accessKey="t"
                                        disabled={false}
                                        tabIndex="5"
                                        tipoMask="TelefoneCelular"
                                    />

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

                                    <div className="d-flex gap-2 mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Enviar (onSubmit)
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={() => acaoPersonalizada('onClick')}
                                        >
                                            Enviar (onClick)
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            onMouseUp={() => acaoPersonalizada('onMouseUp')}
                                        >
                                            Enviar (onMouseUp)
                                        </button>
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioBootstrap;