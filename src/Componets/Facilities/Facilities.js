import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleFacilities from "../SingleFacilities/SingleFacilities";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    fetch("./FakeFacilitiesData.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);
  return (
    <section className="py-5">
      <Container>
        <div className="text-center pb-3">
          <h1 className="fw-bold">
            <span>Our</span>
            <span className="text-danger"> Facilities</span>
          </h1>
          <p>Explore the weapons of Latest Information Technology!</p>
        </div>
        <Row xs={2} md={3} className="g-4">
          {facilities.map((data) => (
            <SingleFacilities data={data} key={data.id}></SingleFacilities>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Facilities;
