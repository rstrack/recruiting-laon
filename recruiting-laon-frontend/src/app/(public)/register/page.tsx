'use client';

import FormCard from "@/components/FormCard";
import { useAuth } from "@/contexts/AuthContext";
import { FormEvent, useState } from "react";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register } = useAuth()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await register({name, email, password})
    }
    return (
        <FormCard handleSubmit={handleSubmit}>
            <div className="col-12">
                <h4 className="text-white mb-1">Cadastre-se</h4>
                <span className="text-tertiary mb-2">Acompanhe os melhores filmes e séries.</span>
            </div>
            <div className="col-12 form-floating">
                <input type="text" className="form-control" id="register-name" placeholder="José" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="register-name">Nome</label>
            </div>
            <div className="col-12 form-floating">
                <input type="email" className="form-control" id="register-email" placeholder="exemplo@email.com" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="register-email">Email</label>
            </div>
            <div className="col-12 form-floating">
                <input type="password" className="form-control" id="register-password" placeholder="********" onChange={(e) => setPassword(e.target.value)}></input>
                <label htmlFor="register-password">Senha</label>
            </div>
            <div className="col-12 form-floating">
                <button type="submit" className="w-100 btn btn-lg btn-light"><small>Entrar</small></button>
            </div>
        </FormCard>
    )
}

export default Register