import React, { useState } from 'react';
import { Container, Navbar, Nav, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import { NavbarStyled, NavLinkStyled, SearchStyled, FormControlSearch } from './styles';

export default function Header({ logo, blogName, pages }) {
  return (
    <NavbarStyled variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" > <img src={logo} alt={blogName} height="40px"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="headerNavbarText" />
            <Navbar.Collapse id="headerNavbarText">
              <Search mobile />
              <Nav as="ul" className="ml-auto px-3">
                {pages.map(({id, url, name}) => (
                  <li key={id} className="px-3 py-2">
                    <NavLinkStyled as={Link} to={`/p/${id}`} className="py-2">{name}</NavLinkStyled>
                  </li>
                ))}
              </Nav>
              <Search desktop />
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>
  );
  
  function Search({ desktop , mobile }){
    const navigate = useNavigate();

    const [query, setQuery] = useState();

    function Submit(e){
        if(query !== ''){
          navigate(`/s/${query}`);
        }
        e.preventDefault();
    }

    if (mobile){
      return(
        <SearchStyled onSubmit={Submit} inline className="px-1 d-lg-none d-inline">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className="search-itens rounded-0 border-right-0">
                <FaSearch/> 
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControlSearch
              className="search-itens rounded-0 border-left-0"
              type="search"
              placeholder="BUSCAR"
              aria-label="BUSCAR"
              value={query}
              onChange={q => setQuery(q.target.value)}
            />
          </InputGroup>
        </SearchStyled>
      );
    }
    if(desktop){
      return(
        <SearchStyled onSubmit={Submit} inline className="px-1 d-none d-lg-block">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className="search-itens rounded-0 border-right-0">
                <FaSearch/> 
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControlSearch
              className="search-itens rounded-0 border-left-0"
              type="search"
              placeholder="BUSCAR"
              aria-label="BUSCAR"
              value={query}
              onChange={q => setQuery(q.target.value)}
            />
          </InputGroup>
        </SearchStyled>
      );
    }
  }
}