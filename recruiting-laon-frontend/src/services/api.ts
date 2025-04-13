'use client';

import axios from "axios";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

api.interceptors.request.use(
    async (config) => {
        const accessToken = await getCookie("recruiting-laon-token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if(!error.response?.data){
            toast.error(error.message)
            return Promise.reject(error);
        }
        if(error.status > 499){
            toast.error("Ocorreu um erro no servidor. Entre em contato com o suporte")
        }else{
            toast.error(error.response.data.message)
        }
        return Promise.reject(error.response.data);
    }
)

export { api };