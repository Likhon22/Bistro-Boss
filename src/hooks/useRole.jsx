import { useQuery } from "@tanstack/react-query";
import { getRole } from "../Utils/user";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      return await getRole(user?.email);
    },
  });
  return [data, isLoading, refetch];
};

export default useRole;
