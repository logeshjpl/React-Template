import React from "react";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Quality.css';
//import img1 from './img-4.png'
import Container from "react-bootstrap/esm/Container";

function Quality() {
    return (
        <div>
            <div className="pad"><h1>We are Providing Best <span style={{ color: 'blue' }}>Quality Service</span></h1></div>
            <div className="imga"><Container> <div className="img1"> <h3>Clean And Quality</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppo</p>
               <div> <p className="geta">Get A Quote</p></div>
                </div></Container>
            </div></div>
    );
}
export default Quality;