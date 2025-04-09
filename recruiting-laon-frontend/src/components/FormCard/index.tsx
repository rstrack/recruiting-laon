import { ReactNode } from "react"

import "./styles.css"

type FormCardProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    children: ReactNode
}

const FormCard = ({handleSubmit, children}: FormCardProps) => {
    return (
        <div className="form-container d-flex align-items-center justify-content-center">
            <div className="card bg-secondary p-5 border-0" style={{maxWidth: 500, margin: 'auto'}}>
                <form className="card-body row gx-0 gy-4" onSubmit={handleSubmit}>
                    {children}
                </form>
            </div>
        </div>
    )
}

export default FormCard