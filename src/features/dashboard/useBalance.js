import { useQuery } from "@tanstack/react-query";
import { getWalletBalance } from "../../services/apiTransaction";

export function useBalance() {
  const token = localStorage.getItem("authToken");

  const {
    data: walletBalance,
    isPending,
    error,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: () => getWalletBalance(token),
  });

  return { walletBalance, isPending, error };
}
