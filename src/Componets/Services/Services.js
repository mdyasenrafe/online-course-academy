import React from "react";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="py-4">
      <Container>
        <div className="text-center pb-5">
          <h1 className="fw-bold pb-2">
            Our <span className="text-danger">Services</span>
          </h1>
          <p>
            Find The Right Online Course For You And Learn new personal And
            professional skills online
          </p>
        </div>
        <div>
          <Row xs={1} md={2} className="g-4">
            {services.slice(0, 4).map((service) => (
              <Service data={service} key={service.id}></Service>
            ))}
          </Row>
        </div>
        <div className="text-center pt-5">
          <Link to="/services">
            <button className="btn btn-danger">See more</button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Services;
