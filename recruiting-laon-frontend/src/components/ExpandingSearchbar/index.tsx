import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ChangeEvent } from "react"

import "./styles.css"

type ExpandingSearchBarProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}

const ExpandingSearchBar = ({ onChange, className }: ExpandingSearchBarProps) => {
    return (
        <div className="search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
            <input type="text" className={`search-input ${className}`} onChange={onChange} placeholder="Buscar" />
        </div>
    )
}

export default ExpandingSearchBar;

