import React from "react";
import {
  FloatingLabel,
  Form,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import img from "../../Images/login.png";

const Login = () => {
  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center pb-3 fw-bold">
          <span className="text-danger">Sign </span> In
        </h1>
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
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <Button variant="danger" className="mt-4" type="submit">
                Log in
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
