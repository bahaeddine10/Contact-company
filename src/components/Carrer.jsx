import React from 'react'
import { Container , Row, Col,Image} from 'react-bootstrap';
function Carrer() {
  return (
    <div>
            <Container fluid className="p-5 mb-4 block">
            <h1 className='text-center mb-5'> Our Career</h1>
            <p className='text-center text-black me-2 ms-2'>Join the team at Contact and be part of an innovative and growing company. We are always on the lookout for talented individuals passionate about the automotive and plastics industry.</p>
            <p className='text-center text-black me-2 ms-2'>With opportunities for growth and development, Contact offers a dynamic working environment where you can thrive</p>
            
        </Container>
        <Container fluid className="p-5  block">
          <p className='ms-5 me-5 text-black fw-300'>We Started our journey and innovate many project like:</p>
          <dl className="row me-5 ms-5">
              <dt className="col-sm-2">On 2016</dt>
              <dd className="col-sm-10 fw-lighter text-black">we developped 9 molds of the armrest
              components of the new VW TROC.
              <Row xs={2} md={2} className="g-4 me-5 ms-5">
              
                <Col > <Image src="../Contact-company/assets/img/image29.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col ><Image src="../Contact-company/assets/img/image23.png" width={'300px'} height={'300px'} thumbnail /></Col>
                </Row>
              </dd>

               <dt className="col-sm-2">On 2017</dt>
               <dd className="col-sm-10 fw-lighter text-black">
                <p>we developped 10 molds for 13 items for the project of renovation of TGV DUPLEX SNCF trains and 9 molds for the armrest components of the new AUDI A6</p>                
               <Row xs={2} md={2} className="g-4 me-5 ms-5">
              
                <Col > <Image src="../Contact-company/assets/img/image27.png" width={'300px'} height={'300px'} thumbnail /></Col>
                <Col ><Image src="../Contact-company/assets/img/image28.png" width={'300px'} height={'300px'} thumbnail /></Col>
                </Row>
               </dd>
               <dt className="col-sm-2">On 2018</dt>
               <dd className="col-sm-10 fw-lighter text-black">
                <p>we developped 9 molds for one of SAGEMCOM electric meters .</p>
                <Row xs={2} md={2} className="g-4 me-5 ms-5">
              <Col > <Image src="../Contact-company/assets/img/image19.png" width={'200px'} height={'100px'} maxHeight={'100px'} thumbnail /></Col>
              <Col ><Image src="../Contact-company/assets/img/image21.png" width={'400px'} height={'300px'} thumbnail /></Col>
              </Row>
               </dd>
               <dt className="col-sm-2">2019</dt>
               <dd className="col-sm-10 fw-lighter text-black">
                <p>we developped 13 molds for SAGEMCOM</p>
                <Row xs={2} md={2} className="g-4 me-5 ms-5">
              <Col > <Image src="../Contact-company/assets/img/image18.png" width={'200px'} height={'100px'} maxHeight={'100px'} thumbnail /></Col>
              <Col ><Image src="../Contact-company/assets/img/image20.png" width={'300px'} height={'300px'} thumbnail /></Col>
              </Row>
              
               </dd>
             </dl>
        </Container>
    </div>
  )
}

export default Carrer
