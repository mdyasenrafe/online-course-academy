import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="py-5 bg-dark text-light">
      <Container>
        <Row>
          <Col sm={6} lg={3}>
            <div>
              <img height="40" src={logo} alt="" />
              <p>
                One Of The Main Objectives Of The Online-Course-Academy Is To
                Create Skilled And Professionally Committed IT Experts, By
                Providing World-Class Training Facilities, To Contribute To The
                Development Of The IT Industry Of Bangladesh{" "}
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div>
              <h5>Adresss</h5>
              <address> 1415 CdA Market</address>
              <span>PaharTali Chatoogram</span>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div>
              <h5>Contact Us</h5>
              <p>Email : onlinecourse@gmail.com</p>
              <p>phone :01455744877</p>
              <p>Website :www.onlinecourse.com</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div>
              <h5>UseFul Links</h5>
              <i className="fab fa-facebook  m-3 icon"></i>
              <i className="fab fa-youtube m-3 icon"></i>
              <i className="fab fa-twitter m-3 icon"></i>
              <i className="fab fa-instagram m-3 icon"></i>
            </div>
          </Col>
        </Row>
        <div className="text-center">
          <p> © copyright 2021 Online Course Academy - All Rights Reserved</p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
