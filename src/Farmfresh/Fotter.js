import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fotter.css';
import { FaBeer } from 'react-icons/fa';

function Fotter(){
    return(
      <div className='fott'>  <div className='fotter'>
<div> 
    <Container>
        <Row>
            <Col md={3}><h3 className='fot'>Contact Us</h3>
            <p className='ul'>Location</p>
            <p className='ul'>(+71) 8522369417</p>
            <p className='ul'>demo@gmail.com</p>
            </Col>
            <Col md={3}><h3 className='fot'>Useful link</h3> <div className='ul'>
                <p>Home</p>
                <p>About</p>
                <p>Service</p>
                <p>Blog</p>
            </div></Col>
            <Col md={3}><h3 className='fot'>Opening Time</h3>
            <p className='para'>Mon : 07;00am to 09:00 pm</p>
            <p className='para'>Mon : 07;00am to 09:00 pm</p>
            <p className='para'>Mon : 07;00am to 09:00 pm</p>
            </Col>
            <Col md={3}><h3 className='fot'>Newsletter</h3>
            <input type="text" className="enter" placeholder="Enter Your Email" name="Enter Your Email"></input>
           <div className='sub' > <a href="#">Subscribe</a></div>
            </Col>
        </Row>
    </Container>
</div>
<FaBeer/>
        </div></div>
    );
}
export default Fotter;