import useAuth from "../../hooks/useAuth";
import CartButton from "../Button/CartButton";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { addCart } from "../../Utils/cart";
import useCart from "../../hooks/useCart";

const CartCard = ({ menu }) => {
  const { user } = useAuth();
  const { name, recipe, image, category, price, _id } = menu;

  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  // handleCart
  const handleCart = async (food) => {
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userPhoto = user?.photoURL;

    const cartInfo = {
      userName,
      userEmail,
      userPhoto,
      foodName: name,
      price,
      menuId: _id,
      recipe,
      foodImage: image,
      category,
    };
    console.log(cartInfo);
    if (user && user?.email) {
      try {
        const response = await addCart(cartInfo);
        if (response?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Food has been saved to your cart",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login to add to the Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card  bg-[#F3F3F3] relative ">
      <figure>
        <img className="w-full h-[300px]" src={image} alt={name} />
      </figure>
      <div className="card-body text-center space-y-3">
        <h2 className="font-medium text-xl">{name}</h2>
        <p>{recipe}</p>
        <div className="bg-[#1f2937] bg-opacity-80 text-white py-1 w-[80px] absolute top-1 right-3 mx-auto rounded-lg">
          <p>${price}</p>
        </div>
        <div
          className="card-actions justify-center"
          onClick={() => handleCart(menu)}
        >
          <CartButton></CartButton>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
