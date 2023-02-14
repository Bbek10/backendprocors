import React from "react";
import ReactStars from "react-rating-stars-component";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
    edit: false,
    precision: 0.5,
  };
  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
