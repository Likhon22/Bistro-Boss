import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import HeadingText from "../HeadingText/HeadingText";
import { MdDelete } from "react-icons/md";
import { deleteCart, getCartBySorting } from "../../Utils/cart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UserCart = () => {
  const { user } = useAuth();
  const [sortType, setSortType] = useState("");
  const [sortField, setSortField] = useState("");

  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["sort", sortField, sortType],
    queryFn: async () => {
      return await getCartBySorting(user?.email, sortField, sortType);
    },
  });
  const totalPrice = cartItems
    .reduce(
      (initialPrice, currentPrice) => initialPrice + currentPrice.price,
      0
    )
    .toFixed(2);
  const handleSorting = (e) => {
    const selectOptions = e.target.value;
    console.log(selectOptions);
    if (selectOptions === "Low to High") {
      setSortField("price");
      setSortType("asc");
    }
    if (selectOptions === "High to Low") {
      setSortField("price");
      setSortType("desc");
    }
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteCart(id);

        Swal.fire({
          title: "Deleted!",
          text: "Your food has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | My Cart</title>
      </Helmet>
      <HeadingText
        headingText={"wanna add more?"}
        subText={"My Cart"}
      ></HeadingText>
      <div className="flex justify-center items-center w-4/5 mx-auto ">
        <div className="bg-[#f6f6f6] w-full p-12 rounded-lg mb-32 ">
          <div className="flex justify-between  ">
            <p className="text-3xl text-black font-semibold">
              Total Orders:{cartItems.length}
            </p>
            <p className="text-3xl text-black font-semibold">
              Total Price:${totalPrice}
            </p>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={handleSorting}
            >
              <option disabled selected>
                sort by price
              </option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>

            {cartItems.length > 0 ? (
              <Link to={"/dashboard/payment"}>
                {" "}
                <button className="btn text-white bg-[#d1a054] border-none hover:bg-black">
                  Pay
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="btn text-white bg-[#d1a054] border-none"
              >
                Pay
              </button>
            )}
          </div>
          {/* table */}
          <div className="overflow-x-auto mt-12">
            <table className="table">
              {/* head */}
              <thead className="bg-[#d1a054] ">
                <tr>
                  <th></th>
                  <th className="uppercase text-white font-medium ">
                    Item Image
                  </th>
                  <th className="uppercase text-white font-medium">
                    Item Name
                  </th>
                  <th className="uppercase text-white font-medium">Price</th>
                  <th className="uppercase text-white font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cartItems?.map((item, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <img className="w-[75px]" src={item.foodImage} alt="" />
                    </td>
                    <td>{item.foodName}</td>
                    <td>${item?.price}</td>
                    <td className="text-red-600 text-xl cursor-pointer ">
                      <MdDelete
                        onClick={() => handleDelete(item._id)}
                      ></MdDelete>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
