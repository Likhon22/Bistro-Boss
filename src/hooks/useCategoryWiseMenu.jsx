import { useQuery } from "@tanstack/react-query";
import { categoryWiseMenu } from "../Utils/menu";
const useCategoryWiseMenu = ({ category }) => {
  const { data: menus, isLoading } = useQuery({
    queryKey: ["menu", category],
    queryFn: async () => {
      return await categoryWiseMenu(category);
    },
  });
  return [menus, isLoading];
};
export default useCategoryWiseMenu;
