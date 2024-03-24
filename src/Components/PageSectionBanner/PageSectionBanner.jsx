import { Parallax, Background } from "react-parallax";
const PageSectionBanner = ({
  img,
  headingText,
  subHeadingText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dicta, ullam eos alias, veritatis enim commodi ut possimus tempore neque deserunt ab laborum eum sint similique, fugit consectetur earum quidem.",
}) => {
  return (
    <div>
      <div className="relative h-[800px] w-full">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={img}
          bgImageAlt="the dog"
          strength={-200}
        >
          <div style={{ height: "700px" }} />{" "}
          <div className=" bg-black flex flex-col justify-center items-center absolute w-1/2 h-[250px] px-12 py-16 top-1/3  left-1/4 bg-opacity-40 rounded-lg text-white">
            <h3 className="text-3xl font-medium uppercase mb-4 text-center">
              {headingText}
            </h3>
            <p className="text-lg">{subHeadingText} </p>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default PageSectionBanner;
