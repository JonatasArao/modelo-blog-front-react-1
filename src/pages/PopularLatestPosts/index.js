import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { PageTitle } from '../../components/Titles';
import { HorizontalCard } from '../../components/Cards';
import { PaginationStyled } from '../../components/Pagination';

import Default from '../../assets/img/default.jpg';

export default function PopularLatestPosts() {
    const { pathname } = useLocation();

    const [titlePage, setTitlePage] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(pathname === `${process.env.PUBLIC_URL}/popularposts`){
            setTitlePage('Populares');
            let popularPosts = []
            for(let i = 0; i <= 8; i++){
            popularPosts.push({
                id: i,
                page: `Página ${(i%4) + 1}`,
                title: 'Título da Matéria',
                description: 'Descrição da Matéria',
                url: process.env.PUBLIC_URL + '/',
                imgSrc: Default
            });
            }
            setPosts(popularPosts);
        }else if(pathname === `${process.env.PUBLIC_URL}/latestposts`){
            setTitlePage('Últimas Novidades');
            let latestPosts = []
            for(let i = 0; i <= 8; i++){
            latestPosts.push({
                id: i,
                page: `Página ${(i%4) + 1}`,
                title: 'Título da Matéria',
                description: 'Descrição da Matéria',
                url: process.env.PUBLIC_URL + '/',
                imgSrc: Default
            });
            }
            setPosts(latestPosts);
        }
    },[pathname]);
    
    return(
        <Container className="mt-3 mb-5" as="section">
            <PageTitle>{titlePage}</PageTitle>
            <Row>
                {posts.map(({id, page, title, imgSrc, url, description}) =>
                    (<Col key={id} lg={8} xs={12}>
                        <HorizontalCard to={url} page={page} imgSrc={imgSrc} title={title} description={description}/>
                    </Col>)
                )}
                <Col lg={8} xs={12}>
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
            </Row>
        </Container>
    )
}