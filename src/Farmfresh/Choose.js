import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Choose.css';

function Choose(){
    return(
        <div>
            <div>
                <h1 className='choose'>Why <span style={{ color: 'blue' }}>Choose Us?</span></h1>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col md={4}><h3>Trusted Services</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The</p></Col>
                        <Col md={4}><h3>Talented Workers</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The</p></Col>
                        <Col md={4}><h3>Organic Products</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The</p></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Choose;