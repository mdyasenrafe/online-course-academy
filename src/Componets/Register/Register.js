import React, { useRef } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import photo from "../../Images/signUp.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Container className="py-5 ">
        <div>
          <h3 className="fw-bold text-center">
            <span className="text-danger">Sign</span> Up
          </h3>
        </div>
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={6}>
            <img className="w-100" src={photo} alt="" />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Your Name"
                className="mb-3"
              >
                <Form.Control
                  {...register("name", { required: true })}
                  type="name"
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Your Email"
                className="mb-3"
              >
                <Form.Control
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Your Password"
                className="mb-3"
              >
                <Form.Control
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /(?=.*?[#?!@$%^&*-])/,
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-danger">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-danger">
                    Password minimum eight in length
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-danger">
                    Password at least one special character
                  </span>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Your Password"
                className="mb-3"
              >
                <Form.Control
                  {...register("password_repeat", {
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                />
                {errors.password_repeat?.type === "required" && (
                  <span className="text-danger">This field is required</span>
                )}
                {errors.password_repeat && (
                  <span className="text-danger">
                    {errors.password_repeat.message}
                  </span>
                )}
              </FloatingLabel>
              <input className="btn btn-danger" type="submit" />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
