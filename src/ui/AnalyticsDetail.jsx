import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styled from "styled-components";
import Legend from "./Legend";
import Spinner from "./Spinner";
import Filter from "./Filter";
import { useCharts } from "../features/dashboard/useCharts";

const StyledAnalytics = styled.div`
  display: grid;
  background-color: var(--color-white);
  margin: 0 10px;
  border-radius: 8px;
  padding: 1rem;

  @media (max-width: 1024px) {
    h4 {
      font-size: 12px;
    }
  }

  @media (max-width: 640px) {
    margin: 0 0 20px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCon = styled.div`
  display: flex;
  place-items: center;
`;
const processChartData = (data) => {
  let inflow = 0;
  let outflow = 0;

  data?.forEach((item) => {
    if (item.is_inflow === 0) {
      outflow += Number(item.amount);
    } else {
      inflow += Number(item.amount);
    }
  });

  return [
    {
      name: "Inflow",
      value: inflow,
      color: "#1bbb78",
    },
    {
      name: "Outflow",
      value: outflow,
      color: "#f74f0d",
    },
  ];
};

function AnalyticsDetail() {
  const { data: details, isPending } = useCharts();
  const data = details?.result?.data;

  const chartData = processChartData(data);

  if (isPending) return <Spinner />;
  return (
    <StyledAnalytics>
      <StyledDiv>
        <h4>Inflow & Outflow Charts</h4>
        <span>
          <Filter
            filterField="analytics_last"
            options={[
              { value: "7", label: "1 Week" },
              { value: "30", label: "1 Month" },
              { value: "90", label: "3 Months" },
            ]}
          />
        </span>
      </StyledDiv>
      <StyledCon>
        <ResponsiveContainer width="80%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              // label
            >
              {chartData.map((entry) => (
                <Cell
                  key={entry.color}
                  fill={entry.color}
                  stroke={entry.color}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <Legend chartData={chartData} />
      </StyledCon>
    </StyledAnalytics>
  );
}

export default AnalyticsDetail;
