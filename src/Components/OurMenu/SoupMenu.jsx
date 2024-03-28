import React from "react";
import PageSectionBanner from "../PageSectionBanner/PageSectionBanner";
import soupBg from "../../assets/assets/menu/soup-bg.jpg";
import CategoryMenu from "../../Menu/CategoryMenu";
import { NavLink } from "react-router-dom";
import ViewMenuButton from "../Button/ViewMenuButton";

const SoupMenu = () => {
  return (
    <div>
      <PageSectionBanner img={soupBg} headingText={"soup"}></PageSectionBanner>
      <div className="mt-16">
        <CategoryMenu
          category={"soup"}
          btnText={"Order Your Favorite FOOD"}
        ></CategoryMenu>
      </div>
      <NavLink to={"http://localhost:5173/our-shop/soup"}>
        <ViewMenuButton btnText={"Order Your Favorite FOOD"}></ViewMenuButton>
      </NavLink>
    </div>
  );
};

export default SoupMenu;
