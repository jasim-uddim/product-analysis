import React from "react";
import "./Review.css";

const Review = (props) => {
  const { about, name, picture, rating } = props.review;
  return (
    <div className="container">
      <div className="image-container">
        <img src={picture} alt="" />
      </div>
      <h1>{name}</h1>
      <p>{about}</p>
      <p>Rating: {rating} star</p>
    </div>
  );
};

export default Review;
