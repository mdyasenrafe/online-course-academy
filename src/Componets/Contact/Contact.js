import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Images/contact us.png";

const Contact = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center pb-3">
          <h1 className="fw-bold">
            <span className="text-danger">Contact </span> Us
          </h1>
          <p>
            If you Have Face a Probleam or Anything You Fell free to Contact
            With me
          </p>
        </div>
        <Row className="align-items-center">
          <Col lg={6}>
            <img className="w-100" src={img} alt="" />
          </Col>
          <Col lg={6}>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                controlId="floatingInput"
                label="Subject"
              >
                <Form.Control type="text" placeholder="Subject" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button variant="danger" className="mt-4" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
