import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { SearchStyled, FormControlSearch } from './styles';

export function SearchForm({ desktop, mobile }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (query !== '') {
            navigate(`/s/${query}`);
        }
    }

    if (mobile) {
        return (
            <SearchStyled onSubmit={handleSubmit} inline className="px-1 d-lg-none d-inline">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="search-itens rounded-0 border-right-0">
                            <FaSearch />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControlSearch
                        className="search-itens rounded-0 border-left-0"
                        type="search"
                        placeholder="BUSCAR"
                        aria-label="BUSCAR"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </InputGroup>
            </SearchStyled>
        );
    }

    if (desktop) {
        return (
            <SearchStyled onSubmit={handleSubmit} inline className="px-1 d-none d-lg-block">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="search-itens rounded-0 border-right-0">
                            <FaSearch />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControlSearch
                        className="search-itens rounded-0 border-left-0"
                        type="search"
                        placeholder="BUSCAR"
                        aria-label="BUSCAR"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </InputGroup>
            </SearchStyled>
        );
    }

    return null;
}