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
  });
  return { user, isPending, isError, error };
}
