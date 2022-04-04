import React, { useContext } from "react";

import Review from "./Review";
import "./Reviews.css";
import { ReviewContext } from "../../App";
const Reviews = () => {
  const [reviews] = useContext(ReviewContext);
  console.log(reviews);
  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
