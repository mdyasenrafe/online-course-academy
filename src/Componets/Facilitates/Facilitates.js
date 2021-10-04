import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleFacilitates from "../SingleFacilitates/SingleFacilitates";

const Facilitates = () => {
  const [facilitates, setFacilitates] = useState([]);
  useEffect(() => {
    fetch("./FakeFacilitatesData.json")
      .then((res) => res.json())
      .then((data) => setFacilitates(data));
  }, []);
  return (
    <section className="py-5">
      <Container>
        <div className="text-center pb-3">
          <h1 className="fw-bold">
            <span>Our</span>
            <span className="text-danger"> Facilitates</span>
          </h1>
          <p>Explore the weapons of Latest Information Technology!</p>
        </div>
        <Row xs={2} md={3} className="g-4">
          {facilitates.map((data) => (
            <SingleFacilitates data={data} key={data.id}></SingleFacilitates>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Facilitates;
