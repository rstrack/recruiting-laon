'use client';

import FormCard from "@/components/FormCard";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login({ email, password })
    }

    return (
        <FormCard handleSubmit={handleSubmit}>
            <div className="col-12">
                <h4 className="text-white mb-0">Entrar</h4>
                <span className="text-tertiary mb-2">Bem vindo(a) de volta!</span>
            </div>
            <div className="col-12 form-floating">
                <input type="email" className="form-control" id="login-email" placeholder="exemplo@email.com" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="login-email">Email</label>
            </div>
            <div className="col-12 form-floating">
                <input type="password" className="form-control" id="login-password" placeholder="********" onChange={(e) => setPassword(e.target.value)}></input>
                <label  htmlFor="login-password">Senha</label>
            </div>
            <div className="col-12 form-floating">
                <button type="submit" className="w-100 btn btn-lg btn-light"><small>Entrar</small></button>
            </div>
        </FormCard>
    )
}

export default Login