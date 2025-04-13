import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import "./styles.css"

const Footer = () => {
    return (
        <footer className="border-top footer py-4">
            <div className="row text-center text-md-start align-items-center gy-4">

                <div className="col-12 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-lg-start">
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" width="132" height="40" />
                    </Link>
                </div>

                <div className="col-12 col-lg-6 col-xl-8 col-xl-6">
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-lg-5">
                        <Link href="/" className="text-tertiary fw-normal footer-items">Início</Link>
                        <Link href="/login" className="text-tertiary fw-normal footer-items">Entrar ou Cadastrar</Link>
                        <Link href="#" className="text-tertiary fw-normal footer-items">Termos e Condições</Link>
                        <Link href="#" className="text-tertiary fw-normal footer-items">Política de Privacidade</Link>
                        <Link href="#" className="text-tertiary fw-normal footer-items">Ajuda</Link>
                    </div>
                </div>

                <div className="col-12 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-lg-end gap-3">
                    <Link href="https://www.facebook.com/laonlabs" className="border rounded-circle p-1">
                        <FontAwesomeIcon icon={faFacebookF} width={22} height={22} />
                    </Link>
                    <Link href="https://www.instagram.com/laonlabs" className="border rounded-circle p-1">
                        <FontAwesomeIcon icon={faInstagram} width={22} height={22} />
                    </Link>
                    <Link href="https://www.youtube.com/@laonlabs" className="border rounded-circle p-1">
                        <FontAwesomeIcon icon={faYoutube} width={22} height={22} />
                    </Link>
                </div>
            </div>
        </footer>

    );
}

export default Footer;