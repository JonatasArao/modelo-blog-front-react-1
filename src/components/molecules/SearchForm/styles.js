import { Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const SearchStyled = styled(Form)`
  .search-itens{
    background-color: #FF000000;
    color: white;
    box-shadow: none;
  }

  .search-itens:focus{
    background-color: white;
  }

  .search-itens::placeholder {
    color: white;
  }
  .search-itens:focus::placeholder, .search-itens:focus{
    color: grey;
  }
`;

export const FormControlSearch = styled(FormControl)`
  ${SearchStyled} &{
    transition: all .3s ease-in-out;
    width: 10vw;
  }
  ${SearchStyled} &:focus{
    transition: all .3s ease-in-out;
    width: 13vw;
  }
`;