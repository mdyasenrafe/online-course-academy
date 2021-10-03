import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const ServicesRouter = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <section className="py-4">
      <Container>
        <div className="text-center pb-4">
          <h1 className="fw-bold">
            Our <span className="text-danger">Services</span>
          </h1>
          <p>
            Find The Right Online Course For You And Learn new personal And
            professional skills online
          </p>
        </div>
        <div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {services.map((service) => (
              <Service data={service} key={service.id}></Service>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ServicesRouter;
