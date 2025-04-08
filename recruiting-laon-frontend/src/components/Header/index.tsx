'use client';

import Image from "next/image"
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

import "./styles.css"
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

export const Header = () => {

    
    useEffect(() => {
        // necessary to use boostrap third-party functions (popovers, dropdowns)
        import('bootstrap/dist/js/bootstrap.bundle.min.js' as string);
    })

    const { user, logout } = useAuth()
    const pathname = usePathname();

    const handleLogout = async () => {
        await logout()
    }

    return (
        <header className="row p-4 mb-4 border-bottom align-items-center ">
            <div className="col-4 text-start">
                <div className="hover-button" onClick={() => history.back()}>
                    <FontAwesomeIcon icon={faCircleLeft} size="xl" />
                    <span className="mx-3">VOLTAR</span>
                </div>
            </div>
            <Image src="/logo.svg" alt="logo" width="132" height="40" className="col-4" />
            <div className="col-4 text-end">
                {pathname == '/login' && <Link href="/register" className="hover-button">CADASTRAR</Link>}
                {pathname == '/register' && <Link href="/login">ENTRAR</Link>}
                {!['/login', '/register'].includes(pathname) && user
                    ? (
                        <div className="dropdown">
                            <button 
                                type="button" 
                                className="rounded-circle bg-tertiary border-0" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                style={{width: 32, height: 32}}
                            >
                                <strong>{user.name[0]}</strong>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end bg-secondary">
                                <li>
                                    <span className="dropdown-header">
                                        {user.name}<br/>
                                        {user.email}
                                    </span>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                    <button className="dropdown-item" type="button" onClick={handleLogout}>
                                        Sair
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )
                    : null}
            </div>
        </header>
    )
}