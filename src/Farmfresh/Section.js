import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Section.css';
import img1 from './banner-img.png'
import { FaBeer } from 'react-icons/fa';
import { CiBadgeDollar } from "react-icons/ci";

function Section(){
    return(
        <div  className="banner">
            <Container >
                <Row>
                    <Col md={6} className="one"><h1 className="section">Keep your Car Clean Always</h1><p>There are many variations of passages of Lorem Ipsum available
</p><div><p className="get">Get A Quote</p> </div><div><p className="conduct">Contact Us</p><FaBeer/> <CiBadgeDollar/> </div> </Col>
                    <Col md={6} className="one"> <img className="img" src={img1} alt=""/></Col>
                </Row>
            </Container>
        </div>
    );
}
export default Section;