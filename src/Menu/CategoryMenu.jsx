import ViewMenuButton from "../Components/Button/ViewMenuButton";
import CategoryMenuCard from "../Components/Card/CategoryMenuCard";
import Container from "../Components/Container/Container";
import HeadingText from "../Components/HeadingText/HeadingText";
import useCategoryWiseMenu from "../hooks/useCategoryWiseMenu";

const CategoryMenu = ({ heading, subHeading, btnText, category }) => {
  const [categories, isLoading] = useCategoryWiseMenu({ category: category });

  return (
    <div>
      <Container>
        {heading ? (
          <HeadingText subText={subHeading} headingText={heading}></HeadingText>
        ) : (
          ""
        )}
        {isLoading ? (
          <div className=" flex justify-center items-center w-[200px] ">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories?.map((menu) => (
              <CategoryMenuCard key={menu._id} menu={menu}></CategoryMenuCard>
            ))}
          </div>
        )}
        
      </Container>
    </div>
  );
};

export default CategoryMenu;
