import PageSectionBanner from "../PageSectionBanner/PageSectionBanner";
import CategoryMenu from "../../Menu/CategoryMenu";
import dessertBg from "../../assets/assets/menu/dessert-bg.jpeg";
import ViewMenuButton from "../Button/ViewMenuButton";
import { NavLink } from "react-router-dom";
const DessertsMenu = () => {
  return (
    <div>
      <PageSectionBanner
        img={dessertBg}
        headingText={"desserts"}
      ></PageSectionBanner>
      <div className="mt-16">
        <CategoryMenu category={"dessert"}></CategoryMenu>
      </div>
      <NavLink>
        <ViewMenuButton btnText={"Order Your Favorite FOOD"}></ViewMenuButton>
      </NavLink>
    </div>
  );
};

export default DessertsMenu;
