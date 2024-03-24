import React from "react";
import HomeBackground from "../../../Components/HomeBackground/HomeBackground";
import FoodCarousel from "../../../Components/FoodCarousel/FoodCarousel";
import chefService from "../../../assets/assets/home/chef-service.jpg";
import SectionBanner from "../../../Components/SectionBanner/SectionBanner";
import CategoryMenu from "../../../Menu/CategoryMenu";
import Contact from "../../../Components/Contact/Contact";

import CartMenu from "../../../Menu/CartMenu";
import Featured from "../../../Featured/Featured";

import Ratings from "../../../Components/Rating/Ratings";

const Home = () => {
  return (
    <div>
      <HomeBackground></HomeBackground>
      <FoodCarousel></FoodCarousel>
      <SectionBanner
        img={chefService}
        headingText={"Bistro Boss"}
        bgColor={"white"}
        bgOpacity={100}
        textColor="black"
      ></SectionBanner>
      <CategoryMenu
        heading={"Check it out"}
        subHeading={"From our menu"}
        btnText={"view full menu"}
        category={"popular"}
      ></CategoryMenu>
      <Contact></Contact>
      <CartMenu category={"offered"}></CartMenu>
      <Featured></Featured>
      <Ratings></Ratings>
    </div>
  );
};

export default Home;
