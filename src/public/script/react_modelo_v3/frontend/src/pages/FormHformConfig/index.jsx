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
        <div className='m-5 p-5'>
            Teste
            
                <div>
                    <div className="row">
                        <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
                        <div className="col-12 col-sm-8">.col-12 .col-sm-8</div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-2">.col-12 .col-sm-2</div>
                        <div className="col-12 col-sm-10">.col-12 .col-sm-10</div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                        <div className="col-12 col-sm-9">.col-12 .col-sm-9</div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6">.col-12 .col-sm-6</div>
                        <div className="col-12 col-sm-6">.col-12 .col-sm-6</div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
                        <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
                        <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                        <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                        <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                        <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                    </div>
                </div>
            
                <div className="container text-center">
                  <div className="row justify-content-start">
                    <div className="col-4">One of two columns</div>
                    <div className="col-4">One of two columns</div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-4">One of two columns</div>
                    <div className="col-4">One of two columns</div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-4">One of two columns</div>
                    <div className="col-4">One of two columns</div>
                  </div>
                  <div className="row justify-content-around">
                    <div className="col-4">One of two columns</div>
                    <div className="col-4">One of two columns</div>
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-4">One of two columns</div>
                    <div className="col-4">One of two columns</div>
                  </div>
                  <div className="row justify-content-evenly">
                    <div className="col-4">One of two columns</div>
                    <div className="col-4">One of two columns</div>
                  </div>
                </div>
            
        </div>
    );
}
export default FormularioHformConfig;