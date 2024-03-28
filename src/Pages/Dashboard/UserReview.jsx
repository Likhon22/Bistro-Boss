import React from "react";
import HeadingText from "../../Components/HeadingText/HeadingText";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useAuth from "./../../hooks/useAuth";
import { addRating } from "../../Utils/rating";
import Swal from "sweetalert2";

const UserReview = () => {
  const [ratingValue, setRatingValue] = React.useState(5);
  const { user } = useAuth();

  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const details = form.details.value;
    const rating = ratingValue;
    const name = user.displayName;
    const ratingInfo = {
      name,
      rating,
      details,
    };

    try {
      const response = await addRating(ratingInfo);
      if (response?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Review has been saved.Thanks for staying with us",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <HeadingText
          headingText={"GIVE A REVIEW"}
          subText={"Sharing is Caring"}
        ></HeadingText>
        <div className="w-4/5 mx-auto  ">
          <div className="bg-[#d0d0d0] w-full   items-center gap-5 p-12 mb-32 rounded-lg">
            <div className="flex flex-col justify-center items-center gap-4">
              <h3 className="text-2xl text-center font-medium">RATE US!</h3>
              <Rating
                style={{ maxWidth: 180 }}
                value={ratingValue}
                onChange={setRatingValue}
              />
            </div>
            <div>
              <form onSubmit={handleReview} className="w-4/5 mx-auto">
                <div className="flex flex-col space-y-2  mt-8  ">
                  <label className="ml-2">Which recipe you liked most?</label>
                  <input
                    placeholder="Recipe you liked most"
                    className="py-4  pl-2 rounded-lg"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2  mt-8 ">
                  <label className="ml-2">
                    Do you have any suggestion for us?
                  </label>
                  <input
                    placeholder="Suggestion"
                    className="py-4  pl-2 rounded-lg"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2  mt-8 ">
                  <label className="ml-2">Which recipe you liked most?</label>
                  <textarea
                    placeholder="Review in detail"
                    className="py-2  pl-2 h-[200px]  rounded-lg"
                    type="text"
                    required
                    name="details"
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-[#d1a054] hover:bg-yellow-600 text-white border-none mt-6"
                >
                  Send Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
