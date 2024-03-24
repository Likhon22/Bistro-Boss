import { useQuery } from "@tanstack/react-query";
import { getCategoryWithPagination } from "../Utils/menu";
const useCategoryWithPagination = ({ category, limit, currentPage }) => {
  const { data: menus, isLoading } = useQuery({
    queryKey: ["menu", category,limit,currentPage],
    queryFn: async () => {
      return await getCategoryWithPagination(category, limit, currentPage);
    },
  });
  return [menus, isLoading];
};
export default useCategoryWithPagination;
