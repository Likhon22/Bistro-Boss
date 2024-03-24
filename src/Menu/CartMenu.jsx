import CartCard from "../Components/Card/CartCard";
import Container from "../Components/Container/Container";
import useCategoryWiseMenu from "../hooks/useCategoryWiseMenu";

const CartMenu = ({ category }) => {
  const [offered, isLoading] = useCategoryWiseMenu({ category: category });
  return (
    <div className="mt-32">
      <Container>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {offered?.map((menu) => (
              <CartCard menu={menu}></CartCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartMenu;
