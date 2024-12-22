import styled from "styled-components";
import Withdrawal from "../../features/moveMoney/Withdrawal";
import FundTransfer from "../../features/moveMoney/FundTransfer";

const StyledCointainer = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

function TransferFund() {
  return (
    <StyledCointainer>
      <FundTransfer />
      <Withdrawal />
    </StyledCointainer>
  );
}

export default TransferFund;
