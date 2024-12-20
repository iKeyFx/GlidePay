import styled from "styled-components";
import AnalyticsDetail from "../../ui/AnalyticsDetail";
import HistoryDetails from "./HistoryDetails";

const StyledSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px 5px 0;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
function DashboardSummary() {
  return (
    <StyledSummary>
      <HistoryDetails />
      <AnalyticsDetail />
    </StyledSummary>
  );
}

export default DashboardSummary;
