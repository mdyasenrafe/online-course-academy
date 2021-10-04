import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../Images/about.png";

const About = () => {
  return (
    <section className="py-5 px-4 px-md-0">
      <Container>
        <h1 className="text-center pb-3 fw-bold">
          <span className="text-danger">About</span> Us
        </h1>
        <Row className="align-items-center">
          <Col lg={6}>
            <div>
              <img className="w-100" src={img} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <h5>Welcome To ONLINE-COURSE-ACADEMY</h5>
              <p>
                One Of The Main Objectives Of The Online-Course-Academy Is To
                Create Skilled And Professionally Committed IT Experts, By
                Providing World-Class Training Facilities, To Contribute To The
                Development Of The IT Industry Of Bangladesh As Well As To Make
                Them Capable Enough To Work In The Local And International IT
                Industry And Marketplaces. We Have Skilled And Experienced
                Trainer Team, Those Make Sure Each Student To Become Able To
                Prove Himself As A Qualified Professional In The Competitive
                Corporate World. Online-Course-Academy Ensures First Strong
                Basic Knowledge On The Course Trainees Get Taught In. The
                Online-Course-Academy Believes In Providing Standard Training
                Facilities, Which Allows Each Trainee To Become Successful IT
                Professionals And Freelancers, So That Those Can Contribute To
                Local IT Development For Long Run.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
