import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const FooterDescription = styled.div`
    background: linear-gradient(30deg,#607d8b 40%,#78909c 60%);
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

export const NavbarStyled = styled(Navbar)`
  background: linear-gradient(to left,#607d8b 0%,#263238 100%);
`;

export const MobileFooterCollapse = styled(NavbarStyled.Collapse)`
    margin: -0.5rem -1rem 0.5rem;
    background-color: #607d8b;
    & a{
        text-decoration: none;
    }
`