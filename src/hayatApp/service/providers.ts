import { MailApi } from './config';
import axios from 'axios'

export const sendEmail = async ({nombres, apellidos, correo, departamento, numero}: MailData) => {
    return axios.post(`${MailApi}/send`, { 
        nombres: `${nombres} ${apellidos}`,
        email: correo,
        departamento: departamento,
        numero: +numero
    }).then(response => {
        return response.data;
    }).catch(error => {
        if(error.code === 'ERR_NETWORK'){
            return {
                error: true,
                message: 'Error al enviar el mensaje, vamos a solucionarlo.'
            }
        }
        if (error.response) {
            return { 
                error: true,
                message: error.response.data.message
            };
        } else {
            throw error;
        }
    });
 };