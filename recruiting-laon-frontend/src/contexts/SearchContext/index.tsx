'use client';
import { createContext, useContext, useState } from 'react';

type SearchContextType = {
    search: string;
    setSearch: (value: string) => void;
};

const SearchContext = createContext<SearchContextType>({
    search: '',
    setSearch: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('This hook must be used inside a provider');
    }

    return context;
};
