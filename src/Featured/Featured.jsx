import featuredImage from "../assets/assets/home/featured.jpg";
import ViewMenuButton from "../Components/Button/ViewMenuButton";

import "../Featured/featured.css";

const Featured = () => {
  return (
    <div>
      <div className="featured  bg-fixed my-32 w-full h-[700px] flex justify-center items-center">
        <div className="flex w-3/5    gap-12">
          <div className="flex-1">
            <img className="w-[648px] h-[400px]" src={featuredImage} alt="" />
          </div>
          <div className="flex-1 text-white  flex flex-col items-center justify-center">
            <p className="font-semibold text-lg pt-10 px-12">20th March,2024</p>
            <p className="px-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium omnis itaque quae dolorum. Aspernatur quam magnam
              error porro doloremque reprehenderit! Architecto earum labore quod
              reprehenderit odit impedit maxime, ducimus ab. Nihil, quisquam
              nisi! Dignissimos quia consequatur eos reiciendis ullam,
              reprehenderit hic neque nostrum illo ducimus officiis quibusdam
              unde mollitia totam, soluta nam, odit veritatis aliquam! Ipsa,
              earum! Quae, suscipit tenetur.
            </p>
            <ViewMenuButton
              btnText={"Read More"}
              color={"white"}
            ></ViewMenuButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
