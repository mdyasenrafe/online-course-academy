import React from "react";

const SingleFacilitates = (props) => {
  const { name, image, description } = props.data;
  return (
    <div>
      <img className="w-25 py-3" src={image} alt="" />
      <div>
        <h3 className="fw-bold">
          <span className="text-danger">
            <h3 className="fw-bold">{name}</h3>
          </span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleFacilitates;
