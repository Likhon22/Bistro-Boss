import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/assets/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <img className="w-1/2 mx-auto" src={errorImg} alt="" />
      <p className="text-center text-xl font-medium">
        Back to{" "}
        <Link className="hover:border-b border-black" to={"/"}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
