import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
//import Row from "react-bootstrap/esm/Row";
import img1 from './img-2.png'
import img2 from './img-1.png'
import img3 from './img-3.png'

function Services() {
    return (
        <div>
           <div > <h1 className="sec">Our <span style={{ color: 'blue' }}>Services</span></h1>
            <p className="sec1">t is a long established fact that a reader will be distracted by the readable content of a page when looking</p></div>
            <Container className="c">
                <Row>
                    <Col md={4}><h3>Express Exterior</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                     <h5>See more</h5><div> <img className="img" src={img1} alt=""/></div>
                    </Col>
                    <Col md={4}><div> <img className="img" src={img2} alt=""/></div><h3>Auto Detailing</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p> <h5>See more</h5></Col>
                    <Col md={4}><h3>Full Service Car Wash</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                    <h5>See more</h5><div> <img className="img" src={img3} alt=""/></div> </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Services;