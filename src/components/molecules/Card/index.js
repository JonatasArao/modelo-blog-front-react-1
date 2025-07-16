import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { 
    ImageCardStyled, 
    HorizontalCardStyled, 
    CardPage, 
    ImageTitleCardStyled, 
    TransparentCardStyled 
} from './styles';

export function ImageCard({ imgSrc, to, page, title }) {

  let PageElement;
  if(page){
    PageElement = <ImageCardStyled.Title>{page}</ImageCardStyled.Title> ;
  }

  let TitleElement;
  if(title){
    TitleElement = 
    <div>
      <ImageCardStyled.Text>{title}</ImageCardStyled.Text>
    </div>;
  }

  return (
    <ImageCardStyled className="border-0 shadow text-white overflow-hidden">
        <ImageCardStyled.Img src={imgSrc} alt={title} />
        <ImageCardStyled.ImgOverlay className="h-100 d-flex flex-column justify-content-end">
            {PageElement}
            {TitleElement}
          <Link to={to} className="stretched-link"></Link>
        </ImageCardStyled.ImgOverlay>
    </ImageCardStyled>
  );
}

export function HorizontalCard({ imgSrc, to, title, description, page }){
  let PageElement;
  if(page){
    PageElement = <CardPage>{page}</CardPage> ;
  }

  return (
    <HorizontalCardStyled className="border-0 rounded-0 shadow my-2">
      <Row className="no-gutters">
        <Col md={4} className="overflow-hidden">
          <HorizontalCardStyled.Img className="rounded-0" src={imgSrc} alt={title}/>
        </Col>
        <Col md={8}>
          <HorizontalCardStyled.Body>
            {PageElement}
            <div className="pt-2">
              <HorizontalCardStyled.Title>{title}</HorizontalCardStyled.Title>
              <HorizontalCardStyled.Text>{description}</HorizontalCardStyled.Text>
            </div>
          </HorizontalCardStyled.Body>
        </Col>
        <Link to={to} className="stretched-link"></Link>
      </Row>
    </HorizontalCardStyled>
  )
}

export function ImageTitleCard({ imgSrc, to, title, description, page }){
  let CardBody;
  if(page){
    CardBody = 
    <ImageTitleCardStyled.Body>
      <CardPage>{page}</CardPage>
      <ImageTitleCardStyled.Text>{title}</ImageTitleCardStyled.Text>
    </ImageTitleCardStyled.Body> ;
  }else{
    CardBody = 
    <ImageTitleCardStyled.Body className="text-center">
      <ImageTitleCardStyled.Text>{title}</ImageTitleCardStyled.Text>
    </ImageTitleCardStyled.Body>;
  }
  return(
    <ImageTitleCardStyled className="border-0 rounded-0 shadow">
      <div className="overflow-hidden">
        <ImageTitleCardStyled.Img className="rounded-0" src={imgSrc} alt={title}></ImageTitleCardStyled.Img>
      </div>
      {CardBody}
      <Link to={to} className="stretched-link"></Link>
    </ImageTitleCardStyled>
  )
}

export function TransparentCard({ imgSrc, to, title }){

  return (
    <TransparentCardStyled className="border-0 rounded-0 mt-4">
      <Row className="no-gutters">
        <Col md={5}>
          <TransparentCardStyled.Img className="rounded-0" src={imgSrc} alt={title}/>
        </Col>
        <Col md={7}>
          <TransparentCardStyled.Body>
            <div className="pt-2">
              <TransparentCardStyled.Title>{title}</TransparentCardStyled.Title>
            </div>
          </TransparentCardStyled.Body>
        </Col>
        <Link to={to} className="stretched-link"></Link>
      </Row>
    </TransparentCardStyled>
  )
}