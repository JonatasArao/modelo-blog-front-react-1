import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { HorizontalCard } from '../../components/molecules'
import { LatestPostsTitle } from '../../components/atoms'
import { PopularPostsAside } from '../../components/organisms';
import { PaginationStyled } from '../../components/molecules';

import Default from '../../assets/img/default.jpg';

export default function Search() {
    const { query } = useParams();

    const [order, setOrder] = useState('recentes');

    const [search, setSearch] = useState([]);
    useEffect(() => {
        if(order === 'recentes'){
            let latest = []
            for(let i = 0; i <=4; i++){
                latest.push({
                    id: i,
                    page: `Página ${(i%4) + 1}`,
                    title: `${query} - Recente ${i + 1}`,
                    description: 'Descrição da Matéria',
                    url: process.env.PUBLIC_URL + '/',
                    imgSrc: Default
                });
                setSearch(latest);
            }
        }else if(order === 'populares'){
            let popular = []
            for(let i = 0; i <=4; i++){
                popular.push({
                    id: i,
                    page: `Página ${(i%4) + 1}`,
                    title: `${query} - Popular ${i + 1}`,
                    description: 'Descrição da Matéria',
                    url: process.env.PUBLIC_URL + '/',
                    imgSrc: Default
                });
                setSearch(popular);
            }
        }
    },[order, query]);

    const [popularPosts, setPopularPosts] = useState([]);
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
        setPopularPosts(temp);
    },[]);

    return (
        <Container className="my-5" as="section">
            <Row>
                <Col lg={8} xs={12} as="section">
                    <div className="mb-4 d-flex justify-content-between">
                        <LatestPostsTitle to="#">RESULTADO DA PESQUISA:<br/> <span className="text-capitalize">{query}</span></LatestPostsTitle>
                        <Form.Control onChange={o => setOrder(o.target.value)} className="col-3" as="select" id="order">
                            <option value="recentes" selected>Recentes</option>
                            <option value="populares">Populares</option>
                        </Form.Control>
                    </div>
                    {search.map(({id, url, imgSrc, page, title, description}) => (
                        <HorizontalCard key={id} to={url} imgSrc={imgSrc} page={page} title={title} description={description} />
                    ))}
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
    )
}