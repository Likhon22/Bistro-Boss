import React from "react";
import CategoryMenu from "../../Menu/CategoryMenu";
import ViewMenuButton from "../Button/ViewMenuButton";

const OfferedMenu = () => {
  return (
    <div className="mb-32">
      <CategoryMenu
        category={"offered"}
        btnText={"Order Your Favorite FOOD"}
        heading={"TODAY'S OFFER"}
        subHeading={"Don't miss"}
      ></CategoryMenu>
    </div>
  );
};

export default OfferedMenu;
