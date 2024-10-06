import React from 'react'
import { Row, Col, Container , Image,Carousel, CarouselCaption} from 'react-bootstrap';
import PC from './PC';
import NF from './NF';
function About() {
  return (
    <div className='about'>
    <Container fluid className="p-5  block  ">
      <h1 className='text-center'>About Us</h1>
      <PC/>
      </Container>
      <Container fluid className='p-5 block'>
      <h1 className='text-center'>Our References</h1>
      <NF/>
      </Container>
    </div>
  )
}

export default About
