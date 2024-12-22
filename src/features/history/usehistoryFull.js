import { useQuery } from "@tanstack/react-query";
import { getUserhistoryFull } from "../../services/apiTransaction";
import { useSearchParams } from "react-router";

export function useHistoryFull() {
  const [searchParams] = useSearchParams();
  const token = localStorage.getItem("authToken");
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isPending } = useQuery({
    queryKey: ["history", page],
    queryFn: () => getUserhistoryFull({ token, page }),
  });

  return { data, isPending };
}
