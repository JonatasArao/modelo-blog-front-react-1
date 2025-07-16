import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageTitleStyled } from './styles';

export function PageTitle({ children }){
    return (
        <Row>
            <PageTitleStyled className="text-center mx-auto mb-3">{ children }</PageTitleStyled>
        </Row>
    )
}

export const PopularPostsTitle = styled(Link)`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #424242;
    text-decoration: underline;

    &:hover{
        transition: all .3s ease-in-out;
        color: #546e7a;
    }
`

export const LatestPostsTitle = styled(Link)`
    transition: all .3s ease-in-out;
    color:  #546e7a;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bolder;
    font-size: 1.5rem;
    line-height: 1.2;

    &:hover{
        color:  #424242;
    }
`