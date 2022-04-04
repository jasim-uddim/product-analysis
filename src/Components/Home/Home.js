import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReviewContext } from "../../App";
import Review from "../Reviews/Review";
import "./Home.css";
const Home = () => {
  const [reviews] = useContext(ReviewContext);
  return (
    <>
      <div className="home">
        <div className="image">
          <img
            src="https://sc1.musik-produktiv.com/pic-010120221xxl/ibanez-gio-grx40-mgn.jpg"
            alt="guitarImage"
          ></img>
        </div>
        <div>
          <h1>Fender Player Stratocaster SSS Electric Guitar</h1>
          <p>
            Electric guitars feature devices called pickups embedded in their
            bodies. Pickups convert the vibrations of the strings into an
            electric signal, which is then sent to an amplifier over a shielded
            cable. The amplifier converts the electric signal into sound and
            plays it."The guitar just had to make a broader statement," he says.
            Alex Lifeson reserves his most daring playing for his solos just try
            wrapping your head around the extra­ terrestrial lunacy of
            "Freewill."
          </p>
        </div>
      </div>
      <div className="review-container">
        <h1>Customer Reviews-(3)</h1>
        <div className="reviews-container">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
      <div className="btn">
        <Link className="all-review" to="/reviews">
          {" "}
          All Reviews
        </Link>
      </div>
    </>
  );
};

export default Home;
