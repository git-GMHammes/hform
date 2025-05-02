// C:\laragon\www\hform\src\public\script\react_modelo_v3\frontend\src\pages\FormularioHformConfig\index.jsx
import React, { useState, useEffect } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
import HformConfigService from '../../services/hformconfig';
import { useParams, Link } from 'react-router-dom';

const FormularioHformConfig = () => {

    const { param1, param2, param3 } = useParams();
    const [listaDataBase, setListaDataBase] = useState([]);
    const [listaTable, setListaTable] = useState([]);
    const [listaColumn, setListaColumns] = useState([]);
    const [showDatabase, setShowDatabase] = useState('show');
    const [showTable, setShowTable] = useState('');
    const [showColumn, setShowColumn] = useState('');
    const [collapsedDatabase, setCollapsedDatabase] = useState('');
    const [collapsedTable, setCollapsedTable] = useState('');
    const [collapsedColumn, setCollapsedColumn] = useState('');

    const resetColapsedShow = () => {
        console.log('resetColapsedShow()');
        setShowDatabase('')
        setShowTable('show')
        setShowColumn('')
        setCollapsedDatabase('collapsed')
        setCollapsedTable('')
        setCollapsedColumn('collapsed')
    };

    useEffect(() => {
        const fetchGetDataBase = async () => {
            setShowDatabase('show')
            setShowTable('')
            setShowColumn('')
            setCollapsedDatabase('')
            setCollapsedTable('collapsed')
            setCollapsedColumn('collapsed')

            try {
                const response = await HformConfigService.getAllDataBase();
                // console.log('Resposta do getAll:', response);
                if (response.length > 0) {
                    setListaDataBase(response);
                }
            } catch (err) {
                console.error('Erro:', err);
            }
        };

        const initializeData = async () => {
            try {
                await fetchGetDataBase();
                // setDebugMyPrint(true);

            } catch (err) {
                console.error('Erro na inicialização dos dados:', err);

            } finally {
                console.log('useEffect finalizado');
            }
        };

        initializeData();

    }, []);

    useEffect(() => {

        setListaTable([]);
        setListaColumns([]);

        if (param1 === undefined) {
            return; // Sai do useEffect sem fazer a chamada de API
        }

        const fetchGetTable = async (getDataBase = param1) => {
            try {
                const response = await HformConfigService.getAllTable(getDataBase);
                // console.log('Resposta do fetchGetTable:', response);
                if (
                    response !== undefined &&
                    response[0] !== undefined &&
                    response[0].length > 0
                ) {
                    setListaTable(response[0]);
                }

                if (response !== undefined && response[0] !== undefined && response[0].length > 0) {
                    // Se tiver tabelas, abre o painel de tabelas
                    setListaTable(response[0]);
                    setShowDatabase('')
                    setShowTable('show')
                    setShowColumn('')
                    setCollapsedDatabase('collapsed')
                    setCollapsedTable('')
                    setCollapsedColumn('collapsed')
                } else {
                    // Se não tiver tabelas, mantém o painel de bancos aberto
                    setShowDatabase('show')
                    setShowTable('')
                    setShowColumn('')
                    setCollapsedDatabase('')
                    setCollapsedTable('collapsed')
                    setCollapsedColumn('collapsed')
                }
            } catch (err) {
                console.error('Erro:', err);
            }

        }

        const initializeData = async () => {
            try {
                await fetchGetTable();
                // setDebugMyPrint(true);

            } catch (err) {
                console.error('Erro na inicialização dos dados:', err);

            } finally {
                console.log('useEffect finalizado');
            }
        };

        initializeData();

    }, [param1]);

    useEffect(() => {
        setListaColumns([]);

        if (param1 === undefined || param2 === undefined) {
            return; // Sai do useEffect sem fazer a chamada de API
        }

        const fetchColumns = async (getDataBase = param1, getTable = param2) => {
            console.log('getDataBase:', getDataBase);
            console.log('getTable:', getTable);
            try {
                const response = await HformConfigService.getAllColumns(getDataBase, getTable);
                console.log('Resposta do fetchColumns:', response[param1]);
                if (
                    response !== undefined &&
                    response[param1] !== undefined &&
                    response[param1].length > 0
                ) {
                    setListaColumns(response[param1]);
                }

                if (response !== undefined && response[param1] !== undefined && response[param1].length > 0) {
                    // Se tiver colunas, abre o painel de colunas
                    setListaColumns(response[param1]);
                    setShowDatabase('')
                    setShowTable('')
                    setShowColumn('show')
                    setCollapsedDatabase('collapsed')
                    setCollapsedTable('collapsed')
                    setCollapsedColumn('')
                } else {
                    // Se não tiver colunas, mantém o painel de tabelas aberto
                    setShowDatabase('')
                    setShowTable('show')
                    setShowColumn('')
                    setCollapsedDatabase('collapsed')
                    setCollapsedTable('')
                    setCollapsedColumn('collapsed')
                }

            } catch (err) {
                console.error('Erro:', err);
            }
        }

        const initializeData = async () => {
            try {
                await fetchColumns();
                // setDebugMyPrint(true);

            } catch (err) {
                console.error('Erro na inicialização dos dados:', err);

            } finally {
                console.log('useEffect finalizado');
            }
        };

        initializeData();

    }, [param1, param2]);

    {/* RENDER DATABASE BK */ }
    const renderDataBase = () => {
        return (
            <>
                {listaDataBase.length === 0 ? (
                    <div className="alert alert-info">Carregando dados...</div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Banco de Dados</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Host</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaDataBase.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <a className='ms-2 btn w-100 text-start'
                                                onClick={resetColapsedShow}
                                                href={`#/formulario/config/${item.database}`}
                                                role='button'
                                            >
                                                {item.database}
                                            </a>
                                        </td>
                                        <td>{item.clientInfo}</td>
                                        <td>{item.hostInfo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="card mt-3">
                            <div className="card-body">
                                <p className="card-text">Total de bancos de dados: {listaDataBase.length}</p>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    {/* RENDER TABELA BK */ }
    const renderTable = () => {
        return (
            <>
                {(listaTable.length !== 0) && (
                    <div className="mt-5">
                        <h2 className="mb-4">Lista de Tabelas do Banco {`${param1}`}</h2>
                        <div className="row g-2">
                            {listaTable.map((item, index) => (
                                <div key={index} className="col-12 col-sm-4 y-4">
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <a className='ms-2 btn w-100 text-start'
                                                href={`#/formulario/config/${param1}/${item}`}
                                                role='button'
                                            >
                                                {item}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                                <p className="card-text">Total de Tabelas: {listaTable.length}</p>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    {/* RENDER COLLUMN */ }
    const renderColumn = () => {
        return (
            <>
                {(listaColumn.length !== 0) && (
                    <div className="mt-5">
                        <div className="row g-2">
                            {listaColumn.map((item, index) => (
                                <div key={index} className="col-12 col-sm-4 y-4">
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <a className='ms-2 btn w-100 text-start'
                                                href={`#/formulario/config/${param1}/${param2}/${item}`}
                                                role='button'
                                            >
                                                {item}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                                <p className="card-text">Total de Colunas: {listaColumn.length}</p>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            <br /> {`showDatabase:: ${showDatabase}`}
            <br /> {`showTable:: ${showTable}`}
            <br /> {`showDatabase:: ${showColumn}`}
            <div className="accordion accordion-flush m-4" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button ${collapsedDatabase}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            Lista de Bancos de Dados
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className={`accordion-collapse collapse ${showDatabase}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {/* Verificação se a listaDataBase está vazia */}
                            {renderDataBase()}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button ${collapsedTable}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Lista de Tabelas do Banco
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className={`accordion-collapse collapse ${showTable}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {/* Verificação se a listaDataBase está vazia */}
                            {renderTable()}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button ${collapsedColumn}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Lista de colunas da Tabela
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className={`accordion-collapse collapse ${showColumn}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {/* Verificação se a listaDataBase está vazia */}
                            {renderColumn()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FormularioHformConfig;