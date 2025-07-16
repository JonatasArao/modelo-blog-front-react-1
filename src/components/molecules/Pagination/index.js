import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';

export const PaginationStyled = styled(Pagination)`
    & .page-item .page-link{
        margin: 0 .5rem;
        border-color: #78909c;
        color: #607d8b;
        border-radius: 0!important;
    }
    & .page-item.disabled .page-link{
        border: 0
    }
`