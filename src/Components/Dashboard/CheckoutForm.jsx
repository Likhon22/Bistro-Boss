import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCart from "../../hooks/useCart";
import { axiosSecure } from "../../Utils";
import useAuth from "../../hooks/useAuth";
import { savePaymentInfo } from "../../Utils/payment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CheckoutForm = () => {
  const stripe = useStripe();
  const [cart, refetch] = useCart();
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [totalPrice]);
  const elements = useElements();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe && !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    // confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent, "paymentIntent");
        const payment = {
          name: user?.displayName,
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          cartIds: cart?.map((item) => item._id),
          menuItemIds: cart?.map((item) => item?.menuId),
          status: "pending",
          date: new Date(),
        };
        const data = await savePaymentInfo(payment);
        console.log(data, "save payment");
        if (data?.deletedResult?.deletedCount > 0 && data?.result?.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment has been successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };
  return (
    <div className="w-1/2 mx-auto  ">
      <form onSubmit={handleSubmit}>
        <div className="flex  items-center ">
          <div className="w-full">
            <CardElement
              className="border border-gray-300 px-2 rounded-md py-4 "
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <div>
            {totalPrice > 0 ? (
              <button
                className="btn  btn-primary "
                type="submit"
                disabled={!stripe && !clientSecret && !totalPrice}
              >
                Pay:${totalPrice}
              </button>
            ) : (
              <button className="btn" disabled>
                Pay
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-8 mt-6">
          <p className="text-red-500 font-medium ">{error}</p>
          {transactionId && (
            <p className="text-green-500 font-medium">
              Your transactionId:{transactionId}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
