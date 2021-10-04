import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";

const bookIcon = <FontAwesomeIcon icon={faBook} />;
const starIcon = <FontAwesomeIcon icon={faStar} />;

const Service = (props) => {
  const {
    image,
    instructor,
    price,
    name,
    rating,
    ratingPeople,
    insImg,
    lesson,
    categroy,
  } = props.data;
  return (
    <Col>
      <Card className="shadow-lg h-100  border-0 p-3   ">
        <Card.Img variant="top" className="rounded" height="300" src={image} />
        <Card.Header className="p-0 pt-3  border-0 bg-light d-flex justify-content-between align-items-center ">
          <div className="d-flex">
            <p className="me-2">{bookIcon}</p>
            <p>{lesson} Lessons</p>
          </div>
          <div className="d-flex">
            <p className="text-warning mx-2">{starIcon}</p>
            <p>{rating}</p>
            <p>({ratingPeople})</p>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="pb-2">{name}</Card.Title>
          <Card.Text> categroy : {categroy}</Card.Text>
          <Card.Text> price : ${price}</Card.Text>
          <Link to="/login">
            <button className="btn btn-danger">Buy Now</button>{" "}
          </Link>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center">
          <img className="rounded-circle rounded-img" src={insImg} alt="" />
          <p>{instructor}</p>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
