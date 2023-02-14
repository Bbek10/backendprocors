import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully</Typography>
      <p className="contact">
        We'll contact to you shortly on your phone number
      </p>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
