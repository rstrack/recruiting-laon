'use client';

import axios from "axios";
import { getCookie } from "cookies-next";

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
        return Promise.reject(error.response.data);
    }
)

export { api };