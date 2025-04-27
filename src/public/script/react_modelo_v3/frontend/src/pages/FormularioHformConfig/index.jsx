// C:\laragon\www\hform\src\public\script\react_modelo_v3\frontend\src\pages\FormularioHformConfig\index.jsx
import React, { useState, useEffect } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
import HformConfigService from '../../services/hformconfig';
import { useParams, Link } from 'react-router-dom';

const FormularioHformConfig = () => {

    const [lista, setLista] = useState([]);
    const { param1, param2, param3 } = useParams();


    useEffect(() => {

        const fetchGetDataBase = async () => {
            try {

                const response = await HformConfigService.getAllDataBase();
                // console.log('Resposta do getAll:', response);
                if (response.length > 0) {
                    setLista(response);
                }
            } catch (err) {
                console.error('Erro circuitos:', err);
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
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Lista de Bancos de Dados</h2>

            {/* Verificação se a lista está vazia */}
            {lista.length === 0 ? (
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
                            {lista.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.database}</td>
                                    <td>{item.clientInfo}</td>
                                    <td>{item.hostInfo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="card mt-3">
                <div className="card-body">
                    <p className="card-text">Total de bancos de dados: {lista.length}</p>
                </div>
            </div>
            {param1 && <p className="card-text"><strong>Parâmetro 1:</strong> {param1}</p>}
            {param2 && <p className="card-text"><strong>Parâmetro 2:</strong> {param2}</p>}
            {param3 && <p className="card-text"><strong>Parâmetro 3:</strong> {param3}</p>}
            {/* Links para usar com os parâmetros */}
            <br/><Link to="/formulario/config/cliente1/banco1/tabela1">Link com três parâmetros</Link>
            {/* Ou usando elementos HTML puros: */}
            <br/><a href="#/formulario/config/usuario1/sistema1/modulo1">Exemplo 1 com três parâmetros</a>
            <br/><a href="#/formulario/config/empresa/financeiro/relatorios">Exemplo 2 com três parâmetros</a>
            <br/><a href="#/formulario/config/admin/configuracoes/seguranca">Exemplo 3 com três parâmetros</a>
        </div>
    );
}
export default FormularioHformConfig;