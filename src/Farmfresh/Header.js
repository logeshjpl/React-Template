import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import img1 from './logo.png'
import img2 from './call-icon.png'
import img3 from './mail-icon.png'
import img4 from './map-icon.png'
import img5 from './toggle-icon.png'

function Header(){
    return(
        <div className='Header'>
           <Container fluid>
            <Row>
            <Col md={3} > <img src={img1} alt=""/></Col>
            <Col md={8}> 
            <Container><Row> <Col md={4}> <p><img src={img2} alt=""/>Call: +01 1234567890</p></Col>
           <Col md={4}><p> <img src={img3} alt=""/>Email: demo@gmail.com</p></Col>
           <Col md={4}> <p><img src={img4} alt=""/>Location: lorm ipusm</p></Col>  
           </Row>  </Container> 
           </Col>
            <Col md={1}><img src={img5} alt=""/> </Col>
            </Row>
            
            </Container> 
        </div>
    );
}
export default Header;