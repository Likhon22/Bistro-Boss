import Container from "../Container/Container";
import HeadingText from "../HeadingText/HeadingText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/assets/home/slide1.jpg";
import slide2 from "../../assets/assets/home/slide2.jpg";
import slide3 from "../../assets/assets/home/slide3.jpg";
import slide4 from "../../assets/assets/home/slide4.jpg";
import slide5 from "../../assets/assets/home/slide5.jpg";

const FoodCarousel = () => {
  return (
    <div className="mb-8">
      <Container>
        <HeadingText
          headingText={"order online"}
          subText={"From 11.00am to 10.00pm"}
        ></HeadingText>
        <div className="overflow-hidden mx-auto">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" relative ">
                <img src={slide1} alt="" />
                <p className="absolute font-medium text-xl  right-1/2 bottom-1/4  text-white">
                  Salads
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <img src={slide2} alt="" />
                <p className="absolute font-medium text-xl  right-1/2 bottom-1/4  text-white">
                  Pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <img src={slide3} alt="" />
                <p className="absolute font-medium text-xl  right-1/2 bottom-1/4  text-white">
                  Soup
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <img src={slide4} alt="" />
                <p className="absolute font-medium text-xl  right-1/2 bottom-1/4  text-white">
                  Desserts
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <img src={slide5} alt="" />
                <p className="absolute font-medium text-xl  right-1/2 bottom-1/4  text-white">
                  Special Salad
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default FoodCarousel;
