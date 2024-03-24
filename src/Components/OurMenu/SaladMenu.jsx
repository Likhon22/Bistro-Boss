import React from "react";
import PageSectionBanner from "../PageSectionBanner/PageSectionBanner";
import CategoryMenu from "../../Menu/CategoryMenu";
import saladBg from "../../assets/assets/menu/salad-bg.jpg";
import { NavLink } from "react-router-dom";
import ViewMenuButton from "../Button/ViewMenuButton";

const SaladMenu = () => {
  return (
    <div>
      <PageSectionBanner
        img={saladBg}
        headingText={"salad"}
      ></PageSectionBanner>
      <div className="mt-16">
        <CategoryMenu
          category={"salad"}
          btnText={"Order Your Favorite FOOD"}
        ></CategoryMenu>
      </div>
      <NavLink>
        <ViewMenuButton btnText={"Order Your Favorite FOOD"}></ViewMenuButton>
      </NavLink>
    </div>
  );
};

export default SaladMenu;
