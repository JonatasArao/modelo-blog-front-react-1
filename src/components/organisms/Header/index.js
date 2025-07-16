import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SearchForm } from '../../molecules/SearchForm';
import { NavbarStyled, NavLinkStyled } from './styles';

export default function Header({ logo, blogName, pages }) {
  return (
    <NavbarStyled variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" > 
                <img src={logo} alt={blogName} height="40px"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="headerNavbarText" />
            <Navbar.Collapse id="headerNavbarText">
              <SearchForm mobile />
              <Nav as="ul" className="ml-auto px-3">
                {pages.map(({id, url, name}) => (
                  <li key={id} className="px-3 py-2">
                    <NavLinkStyled as={Link} to={`/p/${id}`} className="py-2">
                        {name}
                    </NavLinkStyled>
                  </li>
                ))}
              </Nav>
              <SearchForm desktop />
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>
  );
}