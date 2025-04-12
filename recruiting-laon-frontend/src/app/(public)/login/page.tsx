'use client';

import FormCard from "@/components/FormCard";
import { useAuth } from "@/contexts/AuthContext";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import "../styles.css"

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { login } = useAuth()

    const validate = () => {
        const newErrors: { email?: string, password?: string } = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            newErrors.email = "Email obrigatório";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Email inválido";
        }

        if (!password.trim()) {
            newErrors.password = "Senha obrigatória";
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsLoading(true)
        await login({ email, password })
        setIsLoading(false)
    }

    return (
        <FormCard handleSubmit={handleSubmit}>
            <div className="col-12">
                <h4 className="text-white mb-0">Entrar</h4>
                <p className="text-tertiary mb-2">Bem vindo(a) de volta!</p>
            </div>
            <div className="col-12 form-floating">
                <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="login-email"
                    placeholder="exemplo@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="login-email">Email</label>
            </div>
            {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
            <div className="input-group group-password">
                <div className="col-12 form-floating">
                    <input 
                        type={showPassword ? "text" : "password"}
                        className={`form-control input-password ${errors.password ? 'is-invalid' : ''}`} 
                        id="login-password" 
                        placeholder="********" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="login-password">Senha</label>
                </div>
                <button
                    type="button"
                    className="btn btn-show-password"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword 
                            ? <FontAwesomeIcon icon={faEyeSlash}/>
                            : <FontAwesomeIcon icon={faEye}/> 
                        }
                </button>
            </div>
            {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
            <div className="col-12 form-floating">
                <button type="submit" className="w-100 btn btn-lg btn-light rounded-1" disabled={isLoading}>
                    {isLoading
                        ? (
                            <div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="sr-only">Carregando...</span>
                            </div>
                        )
                        : (
                            <small>Entrar</small>
                        )
                    }
                </button>
            </div>
        </FormCard>
    )
}

export default Login