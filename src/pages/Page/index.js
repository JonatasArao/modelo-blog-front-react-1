import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

import { replaceSpecialChars } from '../../functions';

import { PageTitle } from '../../components/Titles';
import { ImageCard } from '../../components/Cards';
import { LatestPostsSection } from '../../components/Sections';
import { PopularPostsAside } from '../../components/Aside';
import { PaginationStyled } from '../../components/Pagination';

import Default from '../../assets/img/default.jpg';

export default function Page() {
    const navigate = useNavigate();
    const { id, page } = useParams();
    if(isNaN(parseInt(id))){
        navigate("/");
    }
    const titlePage = 'Página ' + id;
    const actualPage = replaceSpecialChars(titlePage).toLowerCase();
    
    useEffect(() => {
        if(page === undefined || page !== actualPage) {
            history.push(`${process.env.PUBLIC_URL}/p/${id}/${actualPage}`)
        }
    },[id, page, actualPage, history]);

    const [pageCard, setPageCard] = useState([]);
    useEffect(() => {
        let temp = [];
        for(let i = 1; i <= 6; i++){
        temp.push({
            id: i,
            page: titlePage,
            title: 'Título da Matéria',
            imgSrc: Default,
            url: process.env.PUBLIC_URL + '/'
        });
        }
        setPageCard(temp);
    },[titlePage]);

    const [popularPosts, setPopularPosts] = useState([])
    useEffect(() => {
        let temp = []
        for(let i = 0; i <=6; i++){
        temp.push({
            id: i,
            page: titlePage,
            title: 'Título da Matéria',
            description: 'Descrição da Matéria',
            url: process.env.PUBLIC_URL + '/',
            imgSrc: Default
        });
        }
        setPopularPosts(temp);
    },[titlePage]);

    const [latestPosts, setLatestPosts] = useState([])
    useEffect(() => {
        let temp = []
        for(let i = 0; i <=6; i++){
        temp.push({
            id: i,
            page: titlePage,
            title: 'Título da Matéria',
            description: 'Descrição da Matéria',
            url: process.env.PUBLIC_URL + '/',
            imgSrc: Default
        });
        }
        setLatestPosts(temp);
    },[titlePage]);

    return(
        <>
        <Container className="mt-3" as="section">
            <PageTitle>{titlePage}</PageTitle>
            <Row>
            {pageCard.map(({id, page, title, imgSrc, url}) =>
                (<Col key={id} lg={4} md={6} xs={12} className="mt-3">
                <ImageCard to={url} imgSrc={imgSrc} title={title}/>
                </Col>)
            )}
            </Row>
        </Container>
        <Container className="my-5" as="section">
            <Row>
                <Col lg={8} xs={12} as="section">
                    <LatestPostsSection posts={latestPosts}/>
                    <Row> 
                        <PaginationStyled className="mx-auto mt-3">
                            <PaginationStyled.Prev disabled>Anterior </PaginationStyled.Prev>
                            <PaginationStyled.Item>{1}</PaginationStyled.Item>

                            <PaginationStyled.Item>{2}</PaginationStyled.Item>
                            <PaginationStyled.Item>{3}</PaginationStyled.Item>

                            <PaginationStyled.Next>Próximo &gt;</PaginationStyled.Next>
                        </PaginationStyled>
                    </Row>
                </Col>
                <Col lg={4} xs={12} as="aside">
                    <PopularPostsAside posts={popularPosts}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}