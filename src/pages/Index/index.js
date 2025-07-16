import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { ImageCard } from '../../components/molecules';
import { PopularPostsSection } from '../../components/organisms';
import { LatestPostsAside } from '../../components/organisms';
import { FooterDescriptionElement } from '../../components/organisms';

import Default from '../../assets/img/default.jpg';
import logo from '../../assets/img/Logo.png';

export default function Index() {

  const [IndexCard, setIndexCard] = useState([]);
  useEffect(() => {
    let temp = [];
    for(let i = 1; i <= 6; i++){
      temp.push({
        id: i,
        page: `Página ${(i%4) + 1}`,
        title: 'Título da Matéria',
        imgSrc: Default,
        url: "/"
      });
    }
    setIndexCard(temp);
  },[]);

  const [popularPosts, setPopularPosts] = useState([])
  useEffect(() => {
    let temp = []
    for(let i = 0; i <=4; i++){
      temp.push({
        id: i,
        page: `Página ${(i%4) + 1}`,
        title: 'Título da Matéria',
        description: 'Descrição da Matéria',
        url: "/",
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
        url: "/",
        imgSrc: Default
      });
    }
    setLatestPosts(temp);
  },[]);

  return (
    <>
    <Container className="mt-3" as="section">
      <Row>
        {IndexCard.map(({id, page, title, imgSrc, url}) =>
          (<Col key={id} lg={4} md={6} xs={12} className="mt-3">
            <ImageCard to={url} imgSrc={imgSrc} page={page} title={title}/>
          </Col>
        ))}
      </Row>
    </Container>

    <Container className="mt-5">
      <Row>
        <Col lg={8} xs={12} as="section">
          <PopularPostsSection posts={popularPosts}/>
        </Col>
        <Col lg={4} xs={12} as="aside">
          <LatestPostsAside posts={latestPosts}/>
        </Col>
      </Row>
    </Container>

    <FooterDescriptionElement logo={logo} blogName="Design Teste" blogDescription="Descrição do Blog" />
    </>
  );
}