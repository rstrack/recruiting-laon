'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

import "./styles.css"

import Image from "next/image"

export const Header = () => {

    return (
        <header className="row p-4 mb-4 border-bottom">
            <div className="col-4 align-content-center ">
                <div className="back-button" onClick={() => history.back()}>
                    <FontAwesomeIcon icon={faCircleLeft} size="xl" />
                    <span className="mx-3">VOLTAR</span>
                </div>
            </div>
            <Image src="/logo.svg" alt="logo" width="132" height="40" className="col-4" />
            <div className="col-4"></div>
        </header>
    )
}