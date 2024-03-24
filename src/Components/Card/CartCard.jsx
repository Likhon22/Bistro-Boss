import CartButton from "../Button/CartButton";

const CartCard = ({ menu }) => {
  const { name, recipe, image, category, price } = menu;
  return (
    <div className="card  bg-[#F3F3F3] ">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <div className="card-body text-center space-y-3">
        <h2 className="font-medium text-xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <CartButton></CartButton>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
