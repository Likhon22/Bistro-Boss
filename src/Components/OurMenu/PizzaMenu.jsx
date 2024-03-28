import React from "react";
import PageSectionBanner from "../PageSectionBanner/PageSectionBanner";
import CategoryMenu from "../../Menu/CategoryMenu";
import pizzaBg from "../../assets/assets/menu/pizza-bg.jpg";
import { NavLink } from "react-router-dom";
import ViewMenuButton from "../Button/ViewMenuButton";
const PizzaMenu = () => {
  return (
    <div>
      <PageSectionBanner
        img={pizzaBg}
        headingText={"pizza"}
      ></PageSectionBanner>
      <div className="mt-16">
        <CategoryMenu
          category={"pizza"}
          btnText={"Order Your Favorite FOOD"}
        ></CategoryMenu>
      </div>
      <NavLink to={"http://localhost:5173/our-shop/pizza"}>
        <ViewMenuButton btnText={"Order Your Favorite FOOD"}></ViewMenuButton>
      </NavLink>
    </div>
  );
};

export default PizzaMenu;
