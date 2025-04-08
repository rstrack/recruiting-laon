import { User } from '@/models/User';
import { api } from '../api';

export type LoginRequestData = {
    email: string,
    password: string
}

export type LoginResponseProps = {
    token: string,
    user: User
}

export type RegisterRequestData = {
    name: string,
    email: string,
    password: string
}

export type RegisterResponseProps = {
    token: string,
    user: User
}

export const loginRequest = async ({ email, password }: LoginRequestData) => {
    const response = await api.post('/api/login', { email, password });
    return response.data as LoginResponseProps;
};

export const registerRequest = async (data: { email: string; password: string; name: string }) => {
    const response = await api.post('/api/register', data);
    return response.data;
};

export const logoutRequest = async () => {
    const response = await api.post('/api/logout');
    return response.data;
};