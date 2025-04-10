'use client';

import Image from "next/image"
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

import ExpandingSearchBar from "@/components/ExpandingSearchbar";
import { useAuth } from "@/contexts/AuthContext";

import "./styles.css"

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

    const handleSearch = async () => {
        
    }

    return (
        <header className={"row border-bottom align-items-center text-center text-sm-start fixed-top " + (!['/login', '/register'].includes(pathname) ? "bg-secondary" : "")}>

            <div className="col-12 col-sm-4 mb-3 mb-sm-0 justify-content-center justify-content-sm-start">
                {pathname === '/' ? (
                    <Image src="/logo.svg" alt="logo" width="132" height="40" />
                ) : (
                    <div className="hover-button d-inline-flex align-items-center" onClick={() => history.back()}>
                        <FontAwesomeIcon icon={faCircleLeft} size="xl" />
                        <span className="mx-2">VOLTAR</span>
                    </div>
                )}
            </div>

            <div className="col-12 col-sm-4 d-flex justify-content-center mb-3 mb-sm-0">
                {pathname !== '/' && (
                    <Image src="/logo.svg" alt="logo" width="132" height="40" />
                )}
            </div>

            <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-end align-items-center flex-wrap gap-2">
                {pathname == '/login' && (
                    <Link href="/register" className="hover-button">CADASTRAR</Link>
                )}
                {pathname == '/register' && (
                    <Link href="/login" className="hover-button">ENTRAR</Link>
                )}
                {pathname == '/' && (
                    <ExpandingSearchBar onChange={handleSearch} className=""/>
                )}
                {!['/login', '/register'].includes(pathname) && user && (
                    <div className="dropdown ms-4">
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
                                <p className="dropdown-header">
                                    {user.name}<br/>
                                    {user.email}
                                </p>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <button className="dropdown-item" type="button" onClick={handleLogout}>
                                    Sair
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}