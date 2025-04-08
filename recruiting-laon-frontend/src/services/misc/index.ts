import { api } from '../api';

export const csrfRequest = async () => await api.get('/sanctum/csrf-cookie');