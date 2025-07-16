import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { HorizontalCard, ImageTitleCard } from '../../molecules/Card';
import { LatestPostsTitle, PopularPostsTitle } from '../../atoms/Title';

export function PopularPostsSection({ posts }) {
  return (
    <>
        <PopularPostsTitle to="/popularposts">Populares</PopularPostsTitle>
        {posts.map(({id, url, imgSrc, page, title, description}) => (
            <HorizontalCard 
                key={id} 
                to={url} 
                imgSrc={imgSrc} 
                page={page} 
                title={title} 
                description={description} 
            />
        ))}
    </>
  );
}

export function LatestPostsSection({ posts }){
  return(
    <>
      <LatestPostsTitle to="/latestposts">Últimos</LatestPostsTitle>
      <Row className="mt-2">
      {posts.map(({id, url, imgSrc, title, description}, i) => {
        if(i < 4){
          return (
            <Col sm={6} xs={12} className="my-2" key={id}>
              <ImageTitleCard 
                to={url} 
                imgSrc={imgSrc} 
                title={title} 
                description={description}
              />
            </Col>
          )
        }else{
          return (
            <Col xs={12} className="my-2" key={id}>
              <HorizontalCard 
                to={url} 
                imgSrc={imgSrc} 
                title={title} 
                description={description}
              />
            </Col>
          )
        }
      })}
      </Row>
    </>
  )
}