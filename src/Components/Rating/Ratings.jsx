import { useQuery } from "@tanstack/react-query";
import { getRating } from "../../Utils/rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Container from "../Container/Container";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import HeadingText from "../HeadingText/HeadingText";
const Ratings = () => {
  const { data: ratings, isLoading } = useQuery({
    queryKey: ["rating"],
    queryFn: async () => {
      return await getRating();
    },
  });
  return (
    <div className="mb-32">
      <Container>
        <HeadingText
          headingText={"testimonials"}
          subText={"What Our Client Say"}
        ></HeadingText>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {ratings?.map((rating, index) => (
            <SwiperSlide key={index}>
              <div className="w-4/5 mx-auto  flex flex-col justify-center items-center space-y-4 text-center">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={rating.rating}
                ></Rating>
                <FaQuoteLeft className="text-3xl" />

                <p>{rating.details}</p>
                <p className="text-xl font-medium text-yellow-700">
                  {rating.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Ratings;
