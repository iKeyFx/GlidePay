import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const token = localStorage.getItem("authToken");

  const {
    data: user,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(token),
    // enabled: !!token, // Only fetch if token exists
    // staleTime: 5 * 60 * 1000, // O/ptional: cache for 5 minutes
  });
  //   console.log(user.success);
  return { user, isPending, isError, error };
}
