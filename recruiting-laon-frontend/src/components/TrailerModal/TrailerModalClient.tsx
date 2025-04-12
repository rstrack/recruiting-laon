// components/TrailerModal/TrailerModalClient.tsx
'use client';

import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

interface TrailerModalProps {
    url: string;
    show: boolean;
    onClose: () => void;
}

export default function TrailerModalClient({ url, show, onClose }: TrailerModalProps) {
    const [iframeSrc, setIframeSrc] = useState('');
    const modalRef = useRef<HTMLDivElement>(null);
    const bsModalRef = useRef<bootstrap.Modal | null>(null);

    useEffect(() => {
        import('bootstrap').then(({ Modal }) => {
            if (modalRef.current) {
                bsModalRef.current = new Modal(modalRef.current, {
                    backdrop: 'static',
                });

                modalRef.current.addEventListener('hidden.bs.modal', () => {
                    setIframeSrc('');
                    onClose();
                });

                if (show) {
                    setIframeSrc(url);
                    bsModalRef.current.show();
                }
            }
        });
    }, []);

    useEffect(() => {
        if (show && bsModalRef.current) {
            setIframeSrc(url);
            bsModalRef.current.show();
        } else if (!show && bsModalRef.current) {
            bsModalRef.current.hide();
        }
    }, [show, url]);

    return (
        <div className="modal fade" tabIndex={-1} ref={modalRef}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content rounded-1">
                    <div className="modal-header justify-content-between p-3">
                        <h5 className="modal-title">Trailer</h5>
                        <button type="button" className="btn btn-sm" aria-label="Close" onClick={onClose}>
                            <FontAwesomeIcon icon={faClose}/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                            {iframeSrc && (
                                <iframe
                                    src={iframeSrc}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
