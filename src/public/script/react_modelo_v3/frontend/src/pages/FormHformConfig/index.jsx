// C:\laragon\www\hform\src\public\script\react_modelo_v3\frontend\src\pages\FormularioHformConfig\index.jsx
import React, { useState, useEffect } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
import FormularioHformConfigService from '../../services/hformconfig';


const FormularioHformConfig = () => {

    const [lista, setLista] = useState([]);

    useEffect(() => {

        const fetchGetDataBase = async () => {
            try {

                const response = await FormularioHformConfigService.getAllDataBase();
                console.log('Resposta do getAll:', response);

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
        <>
            
        </>
    );
}
export default FormularioHformConfig;