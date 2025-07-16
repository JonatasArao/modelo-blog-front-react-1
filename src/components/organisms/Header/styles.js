import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const NavbarStyled = styled(Navbar)`
  background: linear-gradient(to left,#607d8b 0%,#263238 100%);
`;

export const NavLinkStyled = styled(Nav.Link)`
    color: white!important;
    border-bottom: thin solid #FF000000;
    &: hover {
        border-bottom: thin solid white;
        text-decoration: none;
    }
`;