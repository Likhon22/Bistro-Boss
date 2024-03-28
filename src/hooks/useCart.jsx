import { useQuery } from "@tanstack/react-query";
import { getCart } from "../Utils/cart";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const {
    data: cartItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      return await getCart(user?.email);
    },
  });
  return [cartItems, refetch, isLoading];
};

export default useCart;
