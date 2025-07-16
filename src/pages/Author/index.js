import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

import { replaceSpecialChars } from '../../functions';

import { PopularPostsSection } from '../../components/Sections';
import { LatestPostsTransparentAside } from '../../components/Aside';
import { PaginationStyled } from '../../components/Pagination';

import Default from '../../assets/img/default.jpg';
import UserDefault from '../../assets/img/user.png';

export default function Author() {
    const navigate = useNavigate();
    const { id , author } = useParams();
    if(isNaN(parseInt(id))){
        navigate("/");
    }
    const authorName = 'Nome do Autor';
    const authorDescription = 'Descrição do Autor';
    const actualPage = replaceSpecialChars(authorName).toLowerCase();
    
    useEffect(() => {
        if(author === undefined || author !== actualPage) {
            history.push(`${process.env.PUBLIC_URL}/a/${id}/${actualPage}`);
        }
    },[id, author, actualPage, history]);

    const [popularPosts, setPopularPosts] = useState([])
    useEffect(() => {
        let temp = []
        for(let i = 0; i <=4; i++){
        temp.push({
            id: i,
            page: `Página ${(i%4) + 1}`,
            title: 'Título da Matéria',
            description: 'Descrição da Matéria',
            url: process.env.PUBLIC_URL + '/',
            imgSrc: Default
        });
        }
        setPopularPosts(temp);
    },[]);

    const [latestPosts, setLatestPosts] = useState([])
    useEffect(() => {
        let temp = []
        for(let i = 0; i <=6; i++){
        temp.push({
            id: i,
            page: `Página ${(i%4) + 1}`,
            title: 'Título da Matéria',
            description: 'Descrição da Matéria',
            url: process.env.PUBLIC_URL + '/',
            imgSrc: Default
        });
        }
        setLatestPosts(temp);
    },[]);

    return (
        <Container className="my-5" as="section">
            <Row>
                <Col lg={8} xs={12} as="section">
                <div className="bg-white shadow p-4 mb-4">
                    <div className="pt-2 pb-4">
                        <img src={UserDefault} className="rounded-circle border border-dark" width="100rem" alt={authorName}/>
                        <h1 className="d-inline text-dark align-middle pl-3">{authorName}</h1>
                    </div>
                    <p>{authorDescription}</p>
                </div>

                    <PopularPostsSection posts={popularPosts}/>
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
                    <LatestPostsTransparentAside posts={latestPosts}/>
                </Col>
            </Row>
        </Container>
    )
}