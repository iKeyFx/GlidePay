import { useQuery } from "@tanstack/react-query";
import { getBank } from "../../services/apiTransaction";

export function useBanks() {
  const token = localStorage.getItem("authToken");

  const { data: bankList, isPending } = useQuery({
    queryKey: ["Banks"],
    queryFn: () => getBank(token),
  });

  return { bankList, isPending };
}
