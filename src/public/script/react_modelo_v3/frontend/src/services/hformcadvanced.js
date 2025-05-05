// C:\laragon\www\hform\src\public\script\react_modelo_v3\frontend\src\services\hformcadvanced.js
import axios from 'axios';
import { getBaseApi } from '../config/env';

// Obter a URL base do ambiente atual
const baseUrl = getBaseApi();
// console.log('baseUrl (C:/laragon/www/hform/src/public/script/react_modelo_v3/frontend/src/services/hformcadvanced.js):', baseUrl);
// Configuração base do axios
const api = axios.create({
    baseURL: `${baseUrl}hform`,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 30000 // 30 segundos
});

const HformAdvancedService = {

    postSalvar: async (getValue = {}) => {
        const url = `/api/builder/salvar`;
        console.log('C:/laragon/www/hform/src/public/script/react_modelo_v3/frontend/src/services/hformcadvanced.js');
        console.log('baseUrl', baseUrl + 'hform' + url);

        if(getValue === undefined || getValue === null || getValue === '') {
            return { error: 'Valor inválido para getValue', status: 400 };
        }

        try {
            const response = await api.post(url, getValue);
            if (response.data.result !== undefined) {
                return response.data.result;
            } else {
                return [];
            }
        } catch (error) {
            // Tratamento específico para erro 404
            if (error.status && error.status === 404) {
                // console.error('Erro 404: Endereço não encontrado');
                return { error: 'Endereço [postSalvar] => ${url}' + url + ' não encontrado', status: 404 };
            }

            console.error('Erro em postSalvar:', error);
            throw error;
        }
    },

    // Método getAll com tratamento de erro completo
    getAllDataBase: async () => {

        const url = `/api/database/exibir`;
        // console.log('C:/laragon/www/hform/src/public/script/react_modelo_v3/frontend/src/services/hformcadvanced.js');
        // console.log('baseUrl', baseUrl + 'hform' + url);
        try {
            const response = await api.get(url);
            if (response.data.result !== undefined) {
                return response.data.result;
            } else {
                return [];
            }
        } catch (error) {
            // Tratamento específico para erro 404
            if (error.status && error.status === 404) {
                // console.error('Erro 404: Endereço não encontrado');
                return { error: 'Endereço [getAll] => ${url}' + url + ' não encontrado', status: 404 };
            }

            console.error('Erro em getAll:', error);
            throw error;
        }
    },

    getAllTable: async (getDataBase = {}) => {
        const url = `/api/table/exibir/${getDataBase}`;
        // console.log('C:/laragon/www/hform/src/public/script/react_modelo_v3/frontend/src/services/hformcadvanced.js');
        // console.log('baseUrl', baseUrl + 'hform' + url);
        try {
            const response = await api.get(url);
            if (response.data.result !== undefined) {
                return response.data.result;
            } else {
                return [];
            }
        } catch (error) {
            // Tratamento específico para erro 404
            if (error.status && error.status === 404) {
                // console.error('Erro 404: Endereço não encontrado');
                return { error: 'Endereço [getAll] => ${url}' + url + ' não encontrado', status: 404 };
            }

            console.error('Erro em getAll:', error);
            throw error;
        }
    },

    getAllColumns: async (getDataBase = {}, getTable = {}) => {
        const url = `/api/column/exibir/${getDataBase}/${getTable}`;
        // console.log('C:/laragon/www/hform/src/public/script/react_modelo_v3/frontend/src/services/hformcadvanced.js');
        // console.log('baseUrl', baseUrl + 'hform' + url);
        try {
            const response = await api.get(url);
            if (response.data.result !== undefined) {
                return response.data.result;
            } else {
                return [];
            }
        } catch (error) {
            // Tratamento específico para erro 404
            if (error.status && error.status === 404) {
                // console.error('Erro 404: Endereço não encontrado');
                return { error: 'Endereço [getAll] => ${url}' + url + ' não encontrado', status: 404 };
            }

            console.error('Erro em getAll:', error);
            throw error;
        }
    }

}
export default HformAdvancedService;