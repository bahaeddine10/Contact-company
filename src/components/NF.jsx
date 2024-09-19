import React ,{useState} from 'react'
import { Row, Col, Container  ,Image , Nav} from 'react-bootstrap';

function NF() {
  const [activeSection, setActiveSection] = useState('Sagemcom');
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
 <Container fluid>
      <Row>
        <Col md={2} className="bg-light">
          <Nav defaultActiveKey="Sagemcom" className="flex-column">

            <Nav.Link onClick={() => handleNavClick('Sagemcom')}>Sagemcom</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('Clerprem')}>Clerprem</Nav.Link>
       

          </Nav>
        </Col>
        <Col md={10}>
        
          <div id="Sagemcom" className={`p-4 ${activeSection === 'Sagemcom' ? '' : 'd-none'}`}>
            <h2>Sagemcom company</h2>
            <p className='fw-lighter text-black'>This is a German company specialized in plastic injection includes between project and capot Emily.</p>
            <p className='fw-lighter text-black'>this company can be making the projects </p>
            <p className='fw-lighter text-blackm'>And can be applicate Capot Emily of :</p>
            <dl className="row">
              <dt className="col-sm-3">Injection</dt>
              <dd className="col-sm-9 fw-lighter text-black">In injection has validation controler makes gamep metrology. 
                  for validation production we need to check with client 
                  and update to check default with client nalisation</dd>

               <dt className="col-sm-3">Assembly</dt>
               <dd className="col-sm-9 fw-lighter text-black">
                <p>In assembly has many objects for plastic injection molding most likes :</p>
                <ul>
                  <li>welding post</li>
                  <li>welding of components </li>
                  <li>shipement to client </li>

                </ul>
               </dd>
             </dl>
             <div className='d-flex justify-content-center'>
            <Image
          src="../../assets/img/logo.png" 
          alt="SIAME Warehouse"
          fluid
          className="shadow-sm border border-3 border-dark-subtle"
        thumbnail   />
        </div>
        <div className='m-5  d-flex justify-content-center'><p className='fw-lighter text-black'> In 2018, We developped 9 molds for one of SAGEMCOM
        electric meters </p>
        <Row xs={1} md={2} className="g-4 ">
                <Col >
                    <Image src="../../assets/img/image21.png" thumbnail />
                </Col>
                <Col > 
                    <Image src="../../assets/img/image19.png"  width={130} height={100} thumbnail />
                </Col>
    

                </Row>
               
          </div>
          <div className='m-5  d-flex justify-content-center gap-2'>
            <p className='fw-lighter text-black'> 2019: we developped 13 molds for SAGEMCOM </p>
        <Row xs={1} md={2} className="g-4 ">
                <Col >
                    <Image src="../../assets/img/image18.png" width={300} thumbnail />
                </Col>
                <Col > 
                    <Image src="../../assets/img/image20.png" width={300}   thumbnail />
                </Col>
    

                </Row>
        </div>


        </div>
          
          <div id="Clerprem" className={`p-4 ${activeSection === 'Clerprem' ? '' : 'd-none'}`}>
            <h2>Clerprem Company</h2>
           
            <p>This is a Franch company objectives can be making Pieces automobile for injection </p>
            <p>This company can be aspect metrology and control 100%  </p>
            <p>After store exit the customer buys this product</p>

            <div className='d-flex justify-content-center'>
              <Image
              src="../../assets/img/logo2.png" 
              alt="SIAME Warehouse"
              fluid
              className="shadow-sm border border-3 border-dark-subtle"
              thumbnail   />
            </div>

            <Row xs={1} md={2} className="g-4 ">
                <Col >
                    <Image src="../../assets/img/image23.png" width={300} thumbnail />
                </Col>
                <Col > 
                    <Image src="../../assets/img/image24.png" width={300}   thumbnail />
                </Col>
                <Col > 
                    <Image src="../../assets/img/image25.png" width={300}   thumbnail />
                </Col>
    
                    </Row>
          
          </div>
          
        </Col>
        
      </Row>

    </Container>
    </div>
  )
}

export default NF ;