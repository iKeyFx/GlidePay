import { useQuery } from "@tanstack/react-query";
import { getUserCharts } from "../../services/apiTransaction";
import { useSearchParams } from "react-router";

export function useCharts() {
  const token = localStorage.getItem("authToken");
  const [searchParam] = useSearchParams();

  const filterValue = searchParam.get("analytics_last");

  const filter = !filterValue || filterValue === "7" ? 7 : Number(filterValue);

  const { data, isPending } = useQuery({
    queryKey: ["charts", filter],
    queryFn: () => getUserCharts({ token, filter }),
  });

  return { data, isPending };
  //   console.log(data);
}
