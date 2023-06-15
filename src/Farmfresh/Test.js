import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';
import img1 from './client-img.png'

function Test(){
    return(
        <div>
            <div>
                <h1 className="test">Testimonial</h1>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col md={10} className="class"><Container fluid>
                          <Row>
                            <Col md={2}><img className="" src={img1} alt=""/></Col>
                            <Col md={10}><p className="testi">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 The point of using Lorem Ipsum is that</p> <h5>JOECH</h5><p>Customer</p></Col>
                            </Row>  </Container> </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Test;