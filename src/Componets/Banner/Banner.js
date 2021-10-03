import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import img from "../../Images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="banner-half-text">
              <h1 className="text-danger fw-bold">Access 2200+</h1>
              <h1>Online yellow-shapeTutorial From Top Instructor.</h1>
              <p>
                Meet university,and cultural institutions, who'll share their
                experience.
              </p>
              <Link to="/services">
                <button className="btn btn-danger">View Courses</button>
              </Link>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <img className="w-100" src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
