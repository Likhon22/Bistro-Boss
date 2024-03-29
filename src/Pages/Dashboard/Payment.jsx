import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import HeadingText from "../../Components/HeadingText/HeadingText";
import CheckoutForm from "../../Components/Dashboard/CheckoutForm";
// TODO:ADD PUBLISHABLE KEY
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publishable_Key);
const Payment = () => {
  return (
    <div>
      <HeadingText
        headingText={"Payment"}
        subText={"Please pay for the food"}
      ></HeadingText>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
