import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy this tasty Burger!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button btnType="Danger"
        clicked={props.checkoutCancelledHandler}
      >
        CANCEL
      </Button>
      <Button btnType="Success"
        clicked={props.checkoutContinuedHandler}
      >
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
