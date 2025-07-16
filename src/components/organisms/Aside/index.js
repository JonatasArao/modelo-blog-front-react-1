import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { TransparentCard } from '../../molecules/Card';
import { LatestPostsTitle, PopularPostsTitle } from '../../atoms/Title';
import { Button } from '../../atoms/Button';
import { LatestPostsAsideCard } from './styles';

export function LatestPostsAside({ posts }){
    return (
        <LatestPostsAsideCard>
            <Card.Header>
                <LatestPostsTitle to="/latestposts">Últimos</LatestPostsTitle>
            </Card.Header>
            <Card.Body>
            <Row>
                <Col xs={11} className="mx-auto">
                    <ListGroup variant="flush">
                        {posts.map(({id, url, title, description}) => (
                            <ListGroup.Item key={id} className="px-0">
                            <Link to={url} className="stretched-link"></Link>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            </ListGroup.Item>
                        ))}
                        <Button 
                            to="/latestposts" 
                            variant="aside" 
                            className="btn-outline-primary mx-auto my-3"
                        >
                            Ler Mais
                        </Button>
                    </ListGroup>
                </Col>
            </Row>
            </Card.Body>
        </LatestPostsAsideCard>
    )
}

export function LatestPostsTransparentAside({ posts }){
    return (
        <>
            <LatestPostsTitle to="/latestposts">Últimos</LatestPostsTitle>
            {posts.map(({id, url, imgSrc, title}) => (
                <TransparentCard key={id} to={url} imgSrc={imgSrc} title={title} />
            ))}
        </>
    )
}

export function PopularPostsAside({ posts }){
    return (
        <>
            <PopularPostsTitle to="/popularposts">Populares</PopularPostsTitle>
            {posts.map(({id, url, imgSrc, title}) => (
                <TransparentCard key={id} to={url} imgSrc={imgSrc} title={title} />
            ))}
        </>
    )
}