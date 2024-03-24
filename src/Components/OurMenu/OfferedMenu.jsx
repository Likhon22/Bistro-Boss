import React from "react";
import CategoryMenu from "../../Menu/CategoryMenu";
import ViewMenuButton from "../Button/ViewMenuButton";

const OfferedMenu = () => {
  return (
    <div>
      <CategoryMenu
        category={"offered"}
        btnText={"Order Your Favorite FOOD"}
        heading={"TODAY'S OFFER"}
        subHeading={"Don't miss"}
      ></CategoryMenu>

      <ViewMenuButton btnText={"Order Your Favorite FOOD"}></ViewMenuButton>
    </div>
  );
};

export default OfferedMenu;
