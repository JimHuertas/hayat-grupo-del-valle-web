import {AuthApi, AuthStatusApi, CreateProductApi} from './config';
import axios from 'axios'

export const loginWithEmailPassword = async ({number, password}: LoginData) => {
    return axios.post(`${AuthApi}/login-admin`, { 
        number: +number, 
        password: password,
    }).then(response => {
        localStorage.setItem('token', response.data.token); 
        return response.data;
    }).catch(error => {
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
 
export const registerUserWithEmailPassword = async ({email, password, fullName, number}: FormState) => {
    
    return axios.post(`${AuthApi}/register`, { 
        fullName: fullName,
        number: +number,
        email: email, 
        password: password,
    }).then(response => {
        localStorage.setItem('token', response.data.token); 
        return response.data;
    }).catch(error => {
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

export const checkAuthStatus = async() => {
    const token = localStorage.getItem('token');
    
    if(token){
        return AuthStatusApi.get('/check-status')
        .then((response)=>{
            return response.data;
        }).catch((e)=>{
            console.log(e);
        });
    }
    return {error: 'Necesita Logearse'}; //No se encontro token JWT;
}   

export const createNewProduct = async({ image, nameProduct, price, category, subcategory, tags, stock }:FormNewProduct)=>{
    const token = localStorage.getItem('token');

    if(token){
        const formData = new FormData();
        if (image) formData.append('file', image);
        formData.append('name', nameProduct);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('subcategory', subcategory);
        formData.append('tags', tags.join(','));
        formData.append('stock', stock);
        return CreateProductApi.post('/create', formData)
        .then((response) => {
            console.log("Exito: ", response.data);
            return response.data;
        })
        .catch((error: any)=>{
            console.log("Error: ", error);
            if (error.response) {
                return { 
                    error: true,
                    message: error.response.data.message
                };
            } else {
                throw error; 
            }
        })
    }
}


export const logoutFirebase = async() => {
    localStorage.clear();
}