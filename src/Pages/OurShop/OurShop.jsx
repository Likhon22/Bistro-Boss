import PageBanner from "../../Components/PageBanner/PageBanner";
import bannerImg from "../../assets/assets/home/banner.jpg";

import { useParams } from "react-router-dom";

import ShopTab from "./ShopTab";
const OurShop = () => {
  const { category } = useParams();

  return (
    <div className="mb-32 min-h-screen">
      <PageBanner
        img={bannerImg}
        headingText={"our shop"}
        subHeadingText={"WOULD YOU LIKE TO TRY A DISH?"}
      ></PageBanner>
      <ShopTab category={category}></ShopTab>
    </div>
  );
};

export default OurShop;
