// C:\laragon\www\hform\src\public\script\react_modelo_v3\frontend\src\pages\FormularioHformConfig\index.jsx
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import HformConfigService from '../../services/hformconfig';

const FormularioHformConfig = () => {

    const [lista, setLista] = useState([]);

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
        </div>
    );
}
export default FormularioHformConfig;