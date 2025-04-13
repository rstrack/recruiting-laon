'use client';

import Image from "next/image"
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

import ExpandingSearchBar from "@/components/ExpandingSearchbar";
import { useAuth } from "@/contexts/AuthContext";

import "./styles.css"
import { useSearch } from "@/contexts/SearchContext";

export const Header = () => {

    useEffect(() => {
        // necessary to use boostrap third-party functions (popovers, dropdowns)
        import('bootstrap');
    }, [])

    const { user, logout } = useAuth()
    const { setSearch } = useSearch();
    const pathname = usePathname();

    const [searchBarValue, setSearchBarValue] = useState('');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            setSearch(searchBarValue);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchBarValue, setSearch]);

    const handleLogout = async () => {
        await logout()
    }

    return (
        <header className={"row border-bottom align-items-center text-center text-sm-start fixed-top " + (!['/login', '/register'].includes(pathname) ? "bg-secondary" : "")}>

            <div className="col-12 col-sm-4 mb-3 mb-sm-0 justify-content-center justify-content-sm-start">
                {pathname === '/' ? (
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" width="132" height="40" />
                    </Link>
                ) : (
                    <div className="hover-button d-inline-flex align-items-center" onClick={() => history.back()}>
                        <FontAwesomeIcon icon={faCircleLeft} size="xl" />
                        <span className="mx-2 text-spacing-10">VOLTAR</span>
                    </div>
                )}
            </div>

            {pathname !== '/' && (
                <div className="col-12 col-sm-4 d-flex justify-content-center mb-3 mb-sm-0">
                    <Link href={['/login', '/register'].includes(pathname) ? "" : "/"}>
                        <Image src="/logo.svg" alt="logo" width="132" height="40" />
                    </Link>
                </div>
            )}

            <div className={"col-12 d-flex justify-content-center justify-content-sm-end align-items-center flex-wrap gap-2 " + (pathname !== '/' ? "col-sm-4" : "col-sm-8")}>
                {pathname == '/login' && (
                    <Link href="/register" className="hover-button text-spacing-10">CADASTRAR</Link>
                )}
                {pathname == '/register' && (
                    <Link href="/login" className="hover-button text-spacing-10">ENTRAR</Link>
                )}
                {pathname == '/' && (
                    <ExpandingSearchBar onChange={(e) => setSearchBarValue(e.target.value)} className="" />
                )}
                {!['/login', '/register'].includes(pathname) && user && (
                    <div className="dropdown ms-4">
                        <button
                            type="button"
                            className="rounded-circle bg-tertiary border-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ width: 32, height: 32 }}
                        >
                            <strong>{user.name[0]}</strong>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end bg-secondary">
                            <li>
                                <p className="dropdown-header">
                                    {user.name}<br />
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