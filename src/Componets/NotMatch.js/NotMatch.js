import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../Images/error.png";

const NotMatch = () => {
  return (
    <section className="container ">
      <img className="w-100" src={errorImg} alt="" />
      <div className="text-center my-4">
        <Link to="/home">
          <button className="btn btn-danger">Back To Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotMatch;
