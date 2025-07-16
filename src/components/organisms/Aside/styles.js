import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const LatestPostsAsideCard = styled(Card)`
    border-style: solid;
    border-width: 4px;
    border-color: #b0bec5;  
    & .card-header{
        background-color: white;
        border: none;
    }
    & .card-body{
        padding: 0 0.3rem;
    }
`