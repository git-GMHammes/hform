import React, { useState, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import HformConfigService from '../../services/hformconfig';
import HformAdvancedService from '../../services/hformcadvanced';
import { useParams, Link } from 'react-router-dom';

const HformAdvanced = () => {
    const { param1, param2, param3 } = useParams();
    const [listDatabase, setListDatabase] = useState([]);
    const [listTable, setListTable] = useState([]);
    const [defineDataBase, setDefineDataBase] = useState('');
    const [defineTable, setDefineTable] = useState('');
    const [defineCollumn, setDefineCollumn] = useState('');

    const [divDimensions, setDivDimensions] = useState({ width: 0, height: 0 });
    const accordionRef = useRef(null);

    {/* FUNÇÃO PARA MEDIR O TAMANHO DA DIV */ }
    const measureDivSize = () => {
        if (accordionRef.current) {
            const { offsetWidth, offsetHeight } = accordionRef.current;
            setDivDimensions({
                width: offsetWidth,
                height: offsetHeight
            });
        }
    };

    // React Hook Form
    const formMethods = useForm({
        defaultValues: {
            database: '',
            table: ''
        }
    });

    const { watch, setValue } = formMethods;
    const watchDatabase = watch('database');
    const watchTable = watch('table');

    {/* RESETAR PARAMETROS */ }
    const resetParams = () => {
        setDefineDataBase('');
        setDefineTable('');
        setDefineCollumn('');

        setValue('database', '');
        setValue('table', '');
    }

    {/* DATABASE BK */ }
    const getHformDataBase = async () => {
        try {
            const response = await HformConfigService.getAllDataBase();
            if (response.length > 0) {
                // console.log('src/public/script/react_modelo_v3/frontend/src/pages/FormHformConfig/index.jsx');
                // console.log('getHformDataBase getAll:', response);
                setListDatabase(response);
            }
        } catch (err) {
            console.error('Erro circuitos:', err);
        }
    }

    {/* TABLE BK */ }
    const getHformTable = async (dataBase = defineDataBase) => {
        try {
            const response = await HformConfigService.getAllTable(dataBase);
            if (response.length > 0) {
                // console.log('src/public/script/react_model\o_v3/frontend/src/pages/FormHformConfig/index.jsx');
                // console.log('getHformTable getAll:', response[0]);
                setListTable(response[0]);
            }
        } catch (err) {
            console.error('Erro circuitos:', err);
        }
    }

    {/* RENDER PARAMETROS */ }
    const renderReturnURLparameters = () => {
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
                </div>
            </>
        );
    }

    {/* RENDER FOMULÁRIO */ }
    const renderFormConstruction = () => {
        // Função para lidar com mudança no banco de dados
        const handleDatabaseChange = (event) => {
            const selectedDatabase = event.target.value;
            setDefineDataBase(selectedDatabase);
            getHformTable(selectedDatabase);
            setDefineTable(''); // Limpa a tabela selecionada
        };

        // Função para lidar com mudança na tabela
        const handleTableChange = (event) => {
            const selectedTable = event.target.value;
            setDefineTable(selectedTable);
        };

        return (
            <form className="p-3">
                <div className="row mb-4">
                    {/* Select de Banco de Dados */}
                    <div className="col-12 col-sm-6 mb-3">
                        <label htmlFor="databaseSelect" className="form-label">Banco de Dados</label>
                        <select
                            id="databaseSelect"
                            className="form-select"
                            value={defineDataBase}
                            onChange={handleDatabaseChange}
                        >
                            <option value="">Selecione um banco de dados</option>
                            {listDatabase.map((db, index) => {
                                // Verifica se db é um objeto ou uma string
                                const dbValue = typeof db === 'object' && db !== null ?
                                    (db.database || '') : db;

                                return (
                                    <option key={index} value={dbValue}>
                                        {dbValue}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    {/* Select de Tabela */}
                    <div className="col-12 col-sm-6 mb-3">
                        <label htmlFor="tableSelect" className="form-label">Tabela</label>
                        <select
                            id="tableSelect"
                            className="form-select"
                            value={defineTable}
                            onChange={handleTableChange}
                            disabled={!defineDataBase}
                        >
                            <option value="">Selecione uma tabela</option>
                            {Array.isArray(listTable) && listTable.map((table, index) => {
                                // Verifica se table é um objeto ou uma string
                                const tableValue = typeof table === 'object' && table !== null ?
                                    (table.name || '') : table;

                                return (
                                    <option key={index} value={tableValue}>
                                        {tableValue}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>

                {/* Botão de Confirmação */}
                <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            console.log('Banco selecionado:', defineDataBase);
                            console.log('Tabela selecionada:', defineTable);
                        }}
                    >
                        Confirmar Seleção
                    </button>
                </div>
            </form>
        );
    };

    useEffect(() => {

        const initializeData = async () => {
            try {
                await getHformDataBase();
            } catch (err) {
                console.error('Erro na inicialização dos dados:', err);

            } finally {
                console.log('useEffect finalizado');
            }
        };

        initializeData();

    }, []);

    useEffect(() => {

        if (param1) {
            setDefineDataBase(param1);
            setValue('database', param1);
        }
        if (param2) {
            setDefineTable(param2);
            setValue('table', param2);
        }

        if (param3) setDefineCollumn(param3);

        setTimeout(() => {
            measureDivSize();
        }, 1000);

    }, [param1, param2, param3, setValue]);

    useEffect(() => {
        const accordionElement = document.getElementById('accordionFlushAdvanced');
        if (accordionElement) {
            accordionElement.addEventListener('shown.bs.collapse', measureDivSize);
            accordionElement.addEventListener('hidden.bs.collapse', measureDivSize);

            return () => {
                accordionElement.removeEventListener('shown.bs.collapse', measureDivSize);
                accordionElement.removeEventListener('hidden.bs.collapse', measureDivSize);
            };
        }
    }, []);

    useEffect(() => {
        if (watchDatabase) {
            setDefineDataBase(watchDatabase);
            getHformTable(watchDatabase);
            setValue('table', '');
        }
        
        setTimeout(() => {
            console.log('src/public/script/react_modelo_v3/frontend/src/pages/HformAdvanced/index.jsx');
            console.log('watchDatabase');
            console.log('----------------------------------');
            console.log('----------------------------------');
            console.log('defineDataBase ::', defineDataBase);
            console.log('defineTable ::', defineTable);
        }, 1000);
        
    }, [watchDatabase, setValue]);
    
    useEffect(() => {
        if (watchTable) {
            setDefineTable(watchTable);
        }

        setTimeout(() => {
            console.log('src/public/script/react_modelo_v3/frontend/src/pages/HformAdvanced/index.jsx');
            console.log('watchTable');
            console.log('----------------------------------');
            console.log('----------------------------------');
            console.log('defineDataBase ::', defineDataBase);
            console.log('defineTable ::', defineTable);
        }, 1000);

    }, [watchTable]);

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

                {/* Parametros de URL */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Parametros de URL
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushAdvanced">
                        <div className="accordion-body">
                            {renderReturnURLparameters()}
                        </div>
                    </div>
                </div>

                {/* Construção de Formulário */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Construção de Formulário
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushAdvanced">
                        <div className="accordion-body">
                            {renderFormConstruction()}
                        </div>
                    </div>
                </div>

                {/* Tabelas Avançadas */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Tabelas Avançadas
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushAdvanced">
                        <div className="accordion-body">
                            ...
                        </div>
                    </div>
                </div>

                {/* Resultado */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                        >
                            Resultado
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