import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useBalance } from "./useBalance";

const StyledBalance = styled.div`
  /* display: flex;
  justify-content: space-between; */
  /* padding: 15px 30px; */
  background-color: var(--color-white-off);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 2px solid var(--color-light-grey);
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StyledB = styled.div`
  display: grid;
  padding: 1.5rem 0 1.5rem 2rem;
  border-right: 2px solid var(--color-teal);
  border-bottom: 2px solid var(--color-teal);
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  cursor: pointer;

  &:first-child {
    border-left: 2px solid var(--color-teal);
  }
`;

const StyledBalanceH5 = styled.h5`
  font-size: 0.6rem;
  margin-bottom: 8px;
  text-transform: uppercase;
`;
const StyledBalanceP = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-teal);

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;
function Balance() {
  const { walletBalance, isPending } = useBalance();
  const balance = walletBalance?.result;

  return (
    <StyledBalance>
      <StyledB>
        <div>
          <StyledBalanceH5>Current Total Balance</StyledBalanceH5>
          <StyledBalanceP>
            {!balance || isPending
              ? formatCurrency(0)
              : formatCurrency(balance)}
          </StyledBalanceP>
        </div>
      </StyledB>

      <StyledB>
        <StyledBalanceH5>Availabe Balance</StyledBalanceH5>
        <StyledBalanceP>{formatCurrency(3000)}</StyledBalanceP>
      </StyledB>
      <StyledB>
        <StyledBalanceH5>Pending Balance</StyledBalanceH5>
        <StyledBalanceP>{formatCurrency(4000)}</StyledBalanceP>
      </StyledB>
    </StyledBalance>
  );
}

export default Balance;
