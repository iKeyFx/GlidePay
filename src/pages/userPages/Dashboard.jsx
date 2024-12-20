import styled from "styled-components";
import Balance from "../../features/dashboard/Balance";
import QuickAction from "../../features/dashboard/QuickAction";
import DashboardSummary from "../../features/dashboard/DashboardSummary";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <QuickAction />
      <Balance />
      <DashboardSummary />
    </StyledDashboard>
  );
}

export default Dashboard;
