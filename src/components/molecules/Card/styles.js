import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const ImageCardStyled = styled(Card)`
    &:hover {
        transition: all .1s ease-in-out;
        filter: brightness(97%);
        text-decoration: none;
    }
    &:hover > img:first-child {
        transition: all .1s ease-in-out;
        filter: brightness(85%);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    .card-img-overlay{
        padding-left: 0.8rem;
        padding-right: 0.8rem;
    }
    .card-title{
        text-decoration: underline;
    }
    .card-text{
        color: black;
        display: inline;
        background-image: linear-gradient(to bottom,white 90%,#212121 10%);
    }
`;

export const HorizontalCardStyled = styled(Card)`
    &:hover {
        transition: all .1s ease-in-out;
        filter: brightness(97%);
        text-decoration: none;
    }
    &:hover .row .card-img {
        transition: all .1s ease-in-out;
        filter: brightness(85%);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const CardPage = styled.p`
    padding: 0 .25rem;
    font-weight: bolder;
    display: inline;
    background-color: #263238;
    color: white
`;

export const ImageTitleCardStyled = styled(Card)`
    &:hover {
        transition: all .1s ease-in-out;
        filter: brightness(97%);
        text-decoration: none;
    }
    &:hover .card-img {
        transition: all .1s ease-in-out;
        filter: brightness(85%);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    & p{
        font-weight: bolder;
    }   
`;

export const TransparentCardStyled = styled(Card)`
    background-color: #eceff1;
    &:hover {
        transition: all .1s ease-in-out;
        filter: brightness(97%);
        text-decoration: none;
        
    }
    & .row .card-img{
        box-shadow: 5px 5px #424242;
    }
    &:hover .row .card-img {
        transition: all .1s ease-in-out;
        box-shadow: 5px 5px #546e7a;
        filter: none;
        -webkit-transform: none;
        -moz-transform: none;
        -o-transform: none;
        -ms-transform: none;
        transform: none;
    }
`;