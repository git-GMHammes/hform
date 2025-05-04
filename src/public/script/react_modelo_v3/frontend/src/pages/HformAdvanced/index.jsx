import React, { useState, useEffect, useRef } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
import HformConfigService from '../../services/hformconfig';
import { useParams, Link } from 'react-router-dom';

const HformAdvanced = () => {
    const { param1, param2, param3 } = useParams();
    const [defineDataBase, setDefineDataBase] = useState('');
    const [defineTable, setDefineTable] = useState('');
    const [defineCollumn, setDefineCollumn] = useState('');

    // Novos estados para o tamanho da div
    const [divDimensions, setDivDimensions] = useState({ width: 0, height: 0 });
    const accordionRef = useRef(null);

    const resetParams = () => {
        setDefineDataBase('');
        setDefineTable('');
        setDefineCollumn('');
    }

    // Função para medir o tamanho da div
    const measureDivSize = () => {
        if (accordionRef.current) {
            const { offsetWidth, offsetHeight } = accordionRef.current;
            setDivDimensions({
                width: offsetWidth,
                height: offsetHeight
            });
        }
    };

    const returnURLparameters = () => {
        return (
            <>
                <div className="m-2">
                    <div className="card mt-3">
                        <div className="card-header">
                            Parâmetros Recebidos
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <strong>Banco de Dados:</strong> {defineDataBase}
                            </div>

                            <div className="mb-3">
                                <strong>Tabela:</strong> {defineTable}
                            </div>

                            <div className="mb-3">
                                <strong>Coluna:</strong> {defineCollumn}
                            </div>
                        </div>
                    </div>

                    {/* Aqui você pode adicionar o restante do formulário ou conteúdo */}
                </div>
            </>
        );
    }

    // Efeito para atualizar os estados com base nos parâmetros da URL
    useEffect(() => {
        // Atualiza os estados apenas se os parâmetros existirem
        if (param1) setDefineDataBase(param1);
        if (param2) setDefineTable(param2);
        if (param3) setDefineCollumn(param3);
    }, [param1, param2, param3]);

    return (
        <>
            <div className='m-2 p-2'>
                <button
                    className="btn btn-outline-primary w-25"
                    onClick={() => {
                        resetParams();
                    }}>
                    Reset
                </button>
            </div>

            <div style={{ display: 'none' }}>
                {/* Display das dimensões da div */}
                <div className="float-end badge bg-info text-dark">
                    <span>Tamanho: {divDimensions.width}px × {divDimensions.height}px</span>
                </div>
            </div>

            <div className="accordion accordion-flush m-2 p-2" id="accordionFlushAdvanced" ref={accordionRef}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Parametros de URL
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushAdvanced">
                        <div className="accordion-body">
                            {returnURLparameters()}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Construção de Formulário
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushAdvanced">
                        <div className="accordion-body">
                            ...
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Tabelas Avançadas
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushAdvanced">
                        <div className="accordion-body">
                            ...
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Formulário Pronto
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushAdvanced">
                        <div className="accordion-body">
                            ...
                        </div>
                    </div>
                </div>
            </div>

            {(divDimensions.height < 190) && (
                <div className='b-5 p-5'></div>
            )}
        </>
    );
}

export default HformAdvanced;