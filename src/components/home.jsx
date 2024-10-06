import React from 'react';
import { Row, Col, Container , Image,Carousel} from 'react-bootstrap';
import Contact from './contact';
import  "../App.css";
function Home() {
  return (
    <div className="home" >
     <Container fluid className="p-5 block container1 ">
      <div className="d-flex justify-content-center align-items-center"><h1 className=" Welcome" >Welcome to Contact Company</h1></div>
      
      <p className="text-center text-black-50 Leader">A Leader in Injection Molding and Assembly Solutions</p>
      </Container>
    <Container fluid className="p-5 block">
    <Row className="justify-content-center">
      
      <Col md={6}>
        <Image
          src="../Contact-company/assets/img/locationContact.png" 
          alt="SIAME Warehouse"
          fluid
          className="shadow-sm"
        />
      </Col>

      
      <Col md={6}>
      <h2 className="mb-4">Location of Contact Company</h2>
        <p className='text-black-25'>Located in the heart of Grombalia’s industrial zone, we specialize in the manufacturing of high-quality connectors for electronics and automotive industries. Our 25+ years of experience and a team of 160 dedicated professionals allow us to deliver world-class solutions to global brands. Whether it's plastic injection, ultrasonic welding, or assembling automotive parts, we ensure top-notch quality at every step.
        Explore our capabilities and see how we contribute to the success of clients like Audi, BMW, and Renault.
       
        </p>
        
      </Col>
    </Row>
  </Container>
  <Container fluid className="p-5 block">
    
    
    <Row className="justify-content-center">

    <Col md={6}>
      <h1 className="mb-4 text-center">About Us</h1>
      <p>Founded in 1998, Contact is a subsidiary of SIAME and is proud to operate under the full exporter regime. With a production facility spanning 4800 m² and certified under IATF 16949 and ISO 14001, we have built a reputation for excellence in plastic injection molding and assembly services. Our commitment to continuous growth, flexibility, and quality makes us a trusted partner for the automotive, electronics, and rail industries.</p>
      </Col>

      <Col md={6}>
      <Carousel data-bs-theme="primary">
      <Carousel.Item >
        <img 
          className="d-block w-100" height={500} src='../Contact-company/assets/img/image27.png' alt='dsds'/>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100" height={500} src='../Contact-company/assets/img/image28.png' alt='dsds'/>
      </Carousel.Item>
    </Carousel>
      </Col>
      
    </Row>
    </Container>
    <Container fluid className="p-5  block container1 ">
            <h1 className='text-center mb-4'>Our Services</h1>
            <p className='me-2 ms-2'>We offer a comprehensive range of services, including:</p>
            <dl className="row me-2 ms-2">
              <dt className="col-sm-3">Plastic Injection Molding</dt>
              <dd className="col-sm-9 fw-lighter text-black">Precision injection of automotive and technical plastic parts with a fleet of 23 automatic molding machines.
              </dd>

               <dt className="col-sm-3">Ultrasonic Welding</dt>
               <dd className="col-sm-9 fw-lighter text-black">
                <p>High-quality welding of technical plastic parts for various industrial applications.</p>
              
               </dd>
               <dt className="col-sm-3">Pad Printing</dt>
               <dd className="col-sm-9 fw-lighter text-black">
                <p>Custom printing of electrical components with attention to detail.</p>
              
               </dd>
               <dt className="col-sm-3">Assembly</dt>
               <dd className="col-sm-9 fw-lighter text-black">
                <p>Specializing in automotive and technical plastic parts assembly for complex projects.</p>
              
               </dd>
             </dl>
             <p className='text-black me-3 ms-3'>Our commitment to flexibility, operating 24/7 with multiple shifts, ensures that we meet the diverse needs of our clients.</p>
        </Container>
   
    <Contact/>
   
    
    </div>
  )
}

export default Home