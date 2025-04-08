'use client';

import { User } from "@/models/User";
import { api } from "@/services/api";
import { loginRequest, LoginRequestData, logoutRequest, registerRequest, RegisterRequestData } from "@/services/auth";
import { csrfRequest } from "@/services/misc";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { createContext, useContext, useState, ReactElement, useEffect } from "react";

type AuthContextType = {
    user: User | null,
    login: (data: LoginRequestData) => Promise<void>
    register: (data: RegisterRequestData) => Promise<void>
    logout: () => Promise<void>
}

type AuthProviderProps = {
    children: ReactElement
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const getUser = async () => {
        const res = await api.get('api/user')
        if (res?.data) setUser(res.data as User)
    }

    const csrf = async () =>  await csrfRequest();

    const login = async ({ email, password }: LoginRequestData) => {
        const { token, user } = await loginRequest({ email, password })

        await setCookie('recruiting-laon-token', token, {
            maxAge: 60 * 60 * 24, // 1 day
        })
        setUser(user)
        redirect('/')
    }

    const register = async ({ name, email, password }: RegisterRequestData) => {
        const { token, user } = await registerRequest({ name, email, password })

        await setCookie('recruiting-laon-token', token, {
            maxAge: 60 * 60 * 24, // 1 day
        })
        setUser(user)
        redirect('/')
    }

    const logout = async () => {
        await logoutRequest()

        deleteCookie('recruiting-laon-token');
        setUser(null)
        redirect('/login')
    }

    useEffect(() => {
        csrf()
        if (!user?.id && getCookie('recruiting-laon-token')) {
            getUser()
        }
    })

    return (
        <AuthContext.Provider
            value={{ user, login, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('This hook must be used inside a provider');
    }

    return context;
};