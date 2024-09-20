import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../App.css"
function Services() {
  return (
    <div className='services'>
         <Container fluid className="p-5  block container1 ">
            <h1 className='text-center mb-4'>Our Services</h1>
            <p>We offer a comprehensive range of services, including:</p>
            <dl className="row">
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
             <p className='text-black'>Our commitment to flexibility, operating 24/7 with multiple shifts, ensures that we meet the diverse needs of our clients.</p>
        </Container>
        <Container fluid className="p-5 block">
            
                <h1>Maintenance workshop</h1>
               <ul>
                <li>A dedicated mold maintenance shop offering optimized conditions for quick setup
                changes</li>
                <li>New molds construction projects are entrusted to the best in class Asian makers.</li>
                <li>Repairs are granted locally by our approved partners.</li>

               </ul>
                
                <Row xs={2} md={2} className="g-4">
                <Col >
                    <Image src="../Contact-company/assets/img/image1.png"  thumbnail />
                </Col>
                <Col > <Image src="../Contact-company/assets/img/image2.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col ><Image src="../Contact-company/assets/img/image3.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col ><Image src="../Contact-company/assets/img/image4.png"  width={'300px'} height={'300px'} thumbnail /></Col>
                   

                </Row>
                
           
            </Container>
            <Container fluid className="p-5 block">
            <Row className="justify-content-center ">
                <Col md={6}>
                <Row xs={1} md={2} className="g-4">
                <Col >
                    <Image src=" ../Contact-company/assets/img/image5.png" width={'300px'} height={'300px'} thumbnail />
                </Col>
                <Col > <Image src="../Contact-company/assets/img/image6.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col  ><Image src="../Contact-company/assets/img/image7.png" width={'300px'} height={'300px'} thumbnail /></Col>
              

                </Row>
                
                </Col>
                <Col md={6}>
                <h1>Assembling workshop</h1>
                <p>For almost 20 years , CONTACT has assembled
                various products designed by the major market
                players.</p>
               <ul>
                <li  className='m-3'><h4>Automotive parts:</h4></li>
                <Image src="../Contact-company/assets/img/image8.png" width={'300px'} height={'300px'} thumbnail />

                <li className='m-3'> <h4>Technical parts :</h4>
                <Row xs={2} md={3} className="g-4">
                <Col >
                    <Image src=" ../Contact-company/assets/img/image9.png" width={'300px'} height={'300px'} thumbnail />
                </Col>
                <Col > <Image src="../Contact-company/assets/img/image10.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col ><Image src="../Contact-company/assets/img/image11.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col ><Image src="../Contact-company/assets/img/image12.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col ><Image src="../Contact-company/assets/img/image13.png" width={'300px'} height={'300px'} thumbnail /></Col>

                   

                </Row>
                </li>

               </ul>
                
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default Services
