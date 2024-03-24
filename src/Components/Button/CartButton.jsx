import React from "react";

const CartButton = ({ btnText = "add to cart" }) => {
  return (
    <div>
      <button
        className={`btn  btn-outline border-0 hover:border-b-2  uppercase hover:border-[#cd9003] text-[#cd9003] bg-[#1f2937] `}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CartButton;
