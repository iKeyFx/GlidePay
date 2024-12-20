import { useQuery } from "@tanstack/react-query";
import { getUserhistory } from "../../services/apiTransaction";

export function useHistory() {
  const token = localStorage.getItem("authToken");

  const { data, isPending } = useQuery({
    queryKey: ["history"],
    queryFn: () => getUserhistory(token),
  });

  console.log(data);
  return { data, isPending };
}
