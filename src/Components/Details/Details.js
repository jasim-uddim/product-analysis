import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  return (
    <div className="details">
      <p>01.Home page:guitar information and image.Review and Rating star.</p>
      <p>
        02.Dashboard information: investment and revenue and rent.line chart and
        area chart.
      </p>
      <p>
        03.Blogs page information:context api information semantic tag
        information and difference inline element, block element,inline-block
        element,
      </p>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/blogs">Blogs</Link>
    </div>
  );
};

export default Details;
