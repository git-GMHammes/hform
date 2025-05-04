// C:/laragon/www/hform/src/public/script/react_modelo_v3/frontend/src/pages/FormularioHformConfig/index.jsx
import React, { useState, useEffect, useRef } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
import FormularioHformConfigService from '../../services/hformconfig';

const HformConfig = () => {

    const [listDatabase, setListDatabase] = useState([]);
    const [listTable, setListTable] = useState([]);
    const [defineDataBase, setDefineDataBase] = useState('');
    const [defineTable, setDefineTable] = useState('');
    const [listColumns, setListColumns] = useState([]);
    const [showDatabase, setShowDatabase] = useState('');
    const [showTable, setShowTable] = useState('');
    const [showCollumn, setShowCollumn] = useState('');
    const [expandedDatabase, setExpandedDatabase] = useState(false);
    const [expandedTable, setExpandedTable] = useState(false);
    const [expandedCollumn, setExpandedCollumn] = useState(false);
    const [collapsedDatabase, setCollapsedDatabase] = useState('collapsed');
    const [collapsedTable, setCollapsedTable] = useState('collapsed');
    const [collapsedCollumn, setCollapsedCollumn] = useState('collapsed');
    const [loadDatabase, setLoadDatabase] = useState(false);
    const [loadTable, setLoadTable] = useState(false);
    const [loadCollumn, setLoadCollumn] = useState(false);

    // Novos estados para o tamanho da div
    const [divDimensions, setDivDimensions] = useState({ width: 0, height: 0 });
    const accordionRef = useRef(null);

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

    const clearSelection = () => {
        
        // Configura o estado para mostrar apenas o banco de dados
        setShowDatabase('');
        setShowTable('');
        setShowCollumn('');

        // Atualiza os estados de expansão
        setExpandedDatabase(false);
        setExpandedTable(false);
        setExpandedCollumn(false);

        // Atualiza os estados de colapso
        setCollapsedDatabase('collapsed');
        setCollapsedTable('collapsed');
        setCollapsedCollumn('collapsed');

        // Limpa as seleções e busca os bancos de dados novamente
        setDefineDataBase('');
        setDefineTable('');
        setListDatabase([]);
        setListTable([]);
        setListColumns([]);
        getHformDataBase();

        setTimeout(() => {
            // console.log('src/public/script/react_modelo_v3/frontend/src/pages/FormHformConfig/index.jsx');
            // console.log('clearSelection');
            // console.log('------------------------------');
            // console.log('showDatabase :: ', showDatabase);
            // console.log('showTable :: ', showTable);
            // console.log('showCollumn :: ', showCollumn);
            // console.log('------------------------------');
            // console.log('expandedDatabase :: ', expandedDatabase);
            // console.log('expandedTable :: ', expandedTable);
            // console.log('expandedCollumn :: ', expandedCollumn);

            // Medir novamente após as mudanças serem aplicadas
            measureDivSize();
        }, 1000);
    }

    {/* DATABASE BK */ }
    const getHformDataBase = async () => {
        try {
            setLoadDatabase(true);
            const response = await FormularioHformConfigService.getAllDataBase();
            if (response.length > 0) {
                // console.log('src/public/script/react_modelo_v3/frontend/src/pages/FormHformConfig/index.jsx');
                // console.log('getHformDataBase getAll:', response);
                setListDatabase(response);

                setTimeout(() => {
                    setShowDatabase('show');
                    setShowTable('');
                    setShowCollumn('');
                    setExpandedDatabase(true);
                    setExpandedTable(false);
                    setExpandedCollumn(false);
                    setCollapsedDatabase('');
                    setCollapsedTable('collapsed');
                    setCollapsedCollumn('collapsed');

                    // Medir novamente após as mudanças serem aplicadas
                    measureDivSize();
                    setLoadDatabase(false);
                }, 1000);
            }
        } catch (err) {
            console.error('Erro circuitos:', err);
        }
    }

    {/* TABLE BK */ }
    const getHformTable = async (dataBase = defineDataBase) => {
        try {
            setLoadTable(true);
            const response = await FormularioHformConfigService.getAllTable(dataBase);
            if (response.length > 0) {
                // console.log('src/public/script/react_model\o_v3/frontend/src/pages/FormHformConfig/index.jsx');
                // console.log('getHformTable getAll:', response[0]);
                setListTable(response[0]);

                setTimeout(() => {
                    setShowDatabase('');
                    setShowTable('show');
                    setShowCollumn('');
                    setExpandedDatabase(false);
                    setExpandedTable(true);
                    setExpandedCollumn(false);
                    setCollapsedDatabase('collapsed');
                    setCollapsedTable('');
                    setCollapsedCollumn('collapsed');

                    // Medir novamente após as mudanças serem aplicadas
                    measureDivSize();
                    setLoadTable(false);
                }, 1000);
            }
        } catch (err) {
            console.error('Erro circuitos:', err);
        }
    }

    {/* COLLUMN BK */ }
    const getHformCollumn = async (dataBase = defineDataBase, table = defineTable) => {
        try {
            setLoadCollumn(true);
            const response = await FormularioHformConfigService.getAllColumns(dataBase, table);
            if (response[dataBase].length > 0) {
                // console.log('src/public/script/react_modelo_v3/frontend/src/pages/FormHformConfig/index.jsx');
                // console.log('getHformCollumn getAll:', response[dataBase]);
                setListColumns(response[dataBase]);

                setTimeout(() => {
                    setShowDatabase('');
                    setShowTable('');
                    setShowCollumn('show');
                    setExpandedDatabase(false);
                    setExpandedTable(false);
                    setExpandedCollumn(true);
                    setCollapsedDatabase('collapsed');
                    setCollapsedTable('collapsed');
                    setCollapsedCollumn('');
                    setLoadCollumn(false);
                }, 1000);
                // Medir novamente após as mudanças serem aplicadas
                measureDivSize();
            }
        } catch (err) {
            console.error('Erro circuitos:', err);
        }
    }

    const renderSpinner = (color) => {
        switch (color) {
            case 'primary':
                return (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            case 'secondary':
                return (
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            case 'success':
                return (
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            case 'danger':
                return (
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            case 'warning':
                return (
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            case 'info':
                return (
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            case 'light':
                return (
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            case 'dark':
                return (
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
            default:
                return (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                );
        }
    };

    const renderDatabaseResult = () => {
        return (
            <>
                <div className="row g-1">
                    {listDatabase.map((item, index) => (
                        <div key={index} className="col-12 col-sm-4 m-2">
                            <div className="card border-primary">
                                <div className="card-header">
                                    <button
                                        className="btn btn w-100"
                                        onClick={() => {
                                            setListColumns([]);
                                            setShowDatabase('');
                                            setShowTable('');
                                            setShowCollumn('');
                                            setExpandedDatabase(false);
                                            setExpandedTable(false);
                                            setExpandedCollumn(false);
                                            setCollapsedDatabase('collapsed');

                                            getHformTable(item.database);
                                            setDefineDataBase(item.database)
                                        }}>
                                        {`[${++index}] ${item.database}`}
                                    </button>
                                </div>
                                <div className="card-body">
                                    <br />{item.clientInfo}
                                    <br />{item.hostInfo}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    const renderTableResult = () => {
        return (
            <>
                <div className="row g-1 ">
                    {listTable.map((item, index) => (
                        <div key={index} className="col-12 col-sm-4 m-2">
                            <div className="card border-success">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>{`[${++index}]`}</div>
                                        <div>{`${item}`}</div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <button
                                        className="btn btn w-100"
                                        onClick={() => {
                                            setShowTable('');
                                            setCollapsedTable('collapsed');
                                            getHformCollumn(defineDataBase, item);
                                            setDefineTable(item)
                                        }}>
                                        View Collumns
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    const renderCollumnResult = () => {
        return (
            <>
                <div className="row g-1">
                    {listColumns.map((item, index) => (
                        <div key={index} className="col-12 col-sm-4 m-2">
                            <div className='d-flex justify-content-between border border-warning rounded-pill'>
                                <div className="p-2">{`${++index})`}</div>
                                <div className="p-2">{`${item}`}</div>
                                <div></div>
                            </div>
                        </div>
                    ))}
                </div>

            </>
        );
    }

    useEffect(() => {

        const initializeData = async () => {
            try {
                await getHformDataBase();
                // setDebugMyPrint(true);

            } catch (err) {
                console.error('Erro na inicialização dos dados:', err);

            } finally {
                console.log('useEffect finalizado');
            }
        };

        initializeData();

        // Medir tamanho inicial da div
        measureDivSize();

        // Adicionar event listener para redimensionamento
        window.addEventListener('resize', measureDivSize);

        // Adicionar event listener para mudanças na exibição do acordeão
        const accordionElement = document.getElementById('accordionFlushConfigGeral');
        if (accordionElement) {
            // Usar MutationObserver para detectar mudanças na DOM
            const observer = new MutationObserver(measureDivSize);
            observer.observe(accordionElement, {
                attributes: true,
                childList: true,
                subtree: true
            });
        }

        // Cleanup function
        return () => {
            window.removeEventListener('resize', measureDivSize);
            // Desconectar o observer
            const accordionElement = document.getElementById('accordionFlushConfigGeral');
            if (accordionElement) {
                const observer = new MutationObserver(() => { });
                observer.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const accordionElement = document.getElementById('accordionFlushConfigGeral');
        if (accordionElement) {
            accordionElement.addEventListener('shown.bs.collapse', measureDivSize);
            accordionElement.addEventListener('hidden.bs.collapse', measureDivSize);

            return () => {
                accordionElement.removeEventListener('shown.bs.collapse', measureDivSize);
                accordionElement.removeEventListener('hidden.bs.collapse', measureDivSize);
            };
        }
    }, []);

    return (
        <>
            <div className='mt-5 mb-5 p-2'>
                <button
                    className="btn btn-outline-primary w-25"
                    onClick={() => {
                        clearSelection();
                    }}>
                    Limpar Seleção
                </button>
            </div>

            <div style={{ display: 'none' }}>
                {/* Display das dimensões da div */}
                <div className="float-end badge bg-info text-dark">
                    <span>Tamanho: {divDimensions.width}px × {divDimensions.height}px</span>
                </div>
            </div>

            <div className="accordion accordion-flush p-2" id="accordionFlushConfigGeral" ref={accordionRef}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${collapsedDatabase} d-flex align-items-center`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseDatabaseOne"
                            aria-expanded={expandedDatabase}
                            aria-controls="flush-collapseDatabaseOne"
                        >
                            <div className="me-auto">
                                Banco{defineDataBase ? '' : 's'} de dados: {defineDataBase}
                            </div>
                            <div>
                                {loadDatabase ? renderSpinner('primary') : ''}
                            </div>
                        </button>
                    </h2>
                    <div id="flush-collapseDatabaseOne" className={`accordion-collapse collapse ${showDatabase}`} data-bs-parent="#accordionFlushConfigGeral">
                        <div className="accordion-body ps-1">
                            {renderDatabaseResult()}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${collapsedTable} d-flex align-items-center`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTabbleTwo"
                            aria-expanded={expandedTable}
                            aria-controls="flush-collapseTabbleTwo"
                        >
                            <div className="me-auto">
                                Tabela{defineTable ? '' : 's'}: {defineTable}
                            </div>
                            <div>
                                {loadTable ? renderSpinner('success') : ''}
                            </div>

                        </button>
                    </h2>
                    <div id="flush-collapseTabbleTwo" className={`accordion-collapse collapse ${showTable}`} data-bs-parent="#accordionFlushConfigGeral">
                        <div className="accordion-body ps-1">
                            {renderTableResult()}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${collapsedCollumn} d-flex align-items-center`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFildThree"
                            aria-expanded={expandedCollumn}
                            aria-controls="flush-collapseFildThree"
                        >
                            <div className="me-auto">
                                Campos
                            </div>
                            <div>
                                {loadCollumn ? renderSpinner('warning') : ''}
                            </div>

                        </button>
                    </h2>
                    <div id="flush-collapseFildThree" className={`accordion-collapse collapse ${showCollumn}`} data-bs-parent="#accordionFlushConfigGeral">
                        <div className="accordion-body">
                            {renderCollumnResult()}
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
export default HformConfig;