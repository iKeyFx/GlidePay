import styled from "styled-components";
import {
  calculateBalancesReversed,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router";

const StyledColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  padding: 1.4rem 1rem;
  &:nth-child(even) {
    background-color: var(--color-light-grey);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledWithdrawalP = styled.p`
  color: var(--color-red-700);
`;

const StyledDepositP = styled.p`
  color: var(--color-teal);
`;

const StyledDescription = styled.p`
  color: var(--color-teal);
`;
const StyledBalance = styled.p`
  color: var(--color-dark-teal);
  @media (max-width: 640px) {
    display: none;
  }
`;

function TableColumn({
  history,
  isPending,
  initialBalance = 0,
  newPagination,
}) {
  const [searchParams] = useSearchParams();

  // if (!history) return <PageNotFound />;
  if (isPending) return <Spinner />;
  const transactionsWithBalances = calculateBalancesReversed(
    history,
    initialBalance,
    newPagination
  );

  const FilterData = transactionsWithBalances
    ? transactionsWithBalances.filter((data) => {
        const transactionType = searchParams.get("history");
        if (!transactionType || transactionType === "all") return true;
        if (transactionType === "deposit") return data.is_inflow === 1;
        if (transactionType === "withdrawal") return data.is_inflow === 0;
      })
    : [];

  return (
    <>
      {FilterData.map((data) => {
        return (
          <StyledColumn key={data.id}>
            <p>{formatDate(data.created_at)}</p>
            <StyledDescription>{data.description}</StyledDescription>
            <StyledWithdrawalP>
              {data.description === "Fund Withdrawal Fee" &&
                `-${formatCurrency(data.amount)}`}
            </StyledWithdrawalP>
            <StyledWithdrawalP>
              {data.is_inflow === 0 &&
              data.description !== "Fund Withdrawal Fee"
                ? `-${formatCurrency(data.amount)}`
                : ""}
            </StyledWithdrawalP>
            <StyledDepositP>
              {data.is_inflow === 1 && `+${formatCurrency(data.amount)}`}
            </StyledDepositP>
            <StyledBalance>{formatCurrency(data.balance)}</StyledBalance>
          </StyledColumn>
        );
      })}
    </>
  );
}

export default TableColumn;
