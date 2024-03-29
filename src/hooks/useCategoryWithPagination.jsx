import { useQuery } from "@tanstack/react-query";
import { getCategoryWithPagination } from "../Utils/menu";
const useCategoryWithPagination = ({
  category,
  limit,
  currentPage,
  sortField,
  sortType,
}) => {
  const { data: menus, isLoading } = useQuery({
    queryKey: ["menu", category, limit, currentPage, sortField, sortType],
    queryFn: async () => {
      return await getCategoryWithPagination(
        category,
        limit,
        currentPage,
        sortField,
        sortType
      );
    },
  });
  return [menus, isLoading];
};
export default useCategoryWithPagination;
