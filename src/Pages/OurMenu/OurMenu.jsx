import PizzaMenu from "../../Components/OurMenu/PizzaMenu";
import SaladMenu from "../../Components/OurMenu/SaladMenu";
import SoupMenu from "../../Components/OurMenu/SoupMenu";
import PageBanner from "../../Components/PageBanner/PageBanner";
import banner from "../../assets/assets/menu/banner3.jpg";

import DessertsMenu from "./../../Components/OurMenu/DessertsMenu";
import OfferedMenu from "./../../Components/OurMenu/OfferedMenu";

const OurMenu = () => {
  return (
    <div className="min-h-screen">
      <PageBanner
        img={banner}
        headingText={"Our Menu"}
        subHeadingText={"Would Like to Try a Dish?"}
      ></PageBanner>
      <OfferedMenu></OfferedMenu>
      <DessertsMenu></DessertsMenu>
      <PizzaMenu></PizzaMenu>
      <SaladMenu></SaladMenu>
      <SoupMenu></SoupMenu>
    </div>
  );
};

export default OurMenu;
