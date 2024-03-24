import Container from "../Container/Container";

const SectionBanner = ({
  bgColor,
  textColor = "white",
  bgOpacity = 50,
  img,
  headingText,
  subHeadingText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad tenetur dolorum architecto maxime optio, vel odit ab laudantium facere porro, explicabo, mollitia est a. Cupiditate facilis perspiciatis repellat alias a.",
}) => {
  return (
    <div className="my-32">
      <Container>
        <div className="relative">
          <img className="rounded-lg  " src={img} alt="" />
          <div className=" bg-white absolute w-1/2 px-12 py-16 top-1/3  left-1/4 rounded-lg text-black">
            <h3 className="text-3xl font-medium uppercase mb-4 text-center">
              {headingText}
            </h3>
            <p className="text-lg">{subHeadingText} </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionBanner;
