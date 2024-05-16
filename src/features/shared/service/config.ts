import axios from 'axios';

const ROUTE_MASTER_API = import.meta.env.VITE_AUTH_API;

export enum UserStatus {
    Checking         = 'checking',
    NotAuthenticated = 'not-authenticated',
    Authenticated    = 'authenticated'
}

export enum CreateProductStatus{
    Checking = 'checking',
    NotCreated = 'not-created',
    Created = 'created',
    Failed = 'failed'
}

const token = localStorage.getItem('token');

export const AuthApi = `${ROUTE_MASTER_API}/auth`;

export const AuthStatusApi = axios.create({
    baseURL: `${ROUTE_MASTER_API}/auth`,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

export const ProductApi = axios.create({
    baseURL: `${ROUTE_MASTER_API}/products`,
    headers: {
        'Authorization': `Bearer ${token}`,
    }
});

export const CreateProductApi = axios.create({
    baseURL: `${ROUTE_MASTER_API}/products`,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
});