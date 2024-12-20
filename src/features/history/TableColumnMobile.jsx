import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import {
  calculateBalancesReversed,
  formatCurrency,
  formatDate,
  formatTime,
} from "../../utils/helpers";
import { useSearchParams } from "react-router";

const StyledCon = styled.div`
  display: grid;
  font-size: 14px;
  padding: 1rem 1rem;
  grid-template-columns: 2.5rem 1fr 1fr 1fr;

  &:nth-child(even) {
    background-color: var(--color-light-grey);
  }
`;

const StyledIconCon = styled.div`
  background-color: var(--color-light-grey);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconUp = styled(IoArrowUpOutline)`
  width: 15px;
  height: 20px;
  color: var(--color-red-700);
`;

const IconDown = styled(IoArrowDownOutline)`
  width: 15px;
  height: 20px;
  color: var(--color-teal);
`;

const StyledBody = styled.div`
  p {
    color: var(--color-teal);
  }
  span {
    font-size: 12px;
    color: var(--color-blue-grey-200);
  }
`;
const StyledDate = styled.p`
  /* font-size: 12px; */
  font-size: 12px;
`;
const StyledAmount = styled.p`
  color: ${(prop) =>
    prop.inflow ? "var(--color-teal)" : "var(--color-red-700)"};
`;
function TableColumnMobile({
  history,
  initialBalance = 0,
  isPending,
  newPagination,
}) {
  const [searchParams] = useSearchParams();
  // console.log(history);
  if (isPending) return <Spinner />;
  const transactionsWithBalances = calculateBalancesReversed(
    history,
    initialBalance,
    newPagination
  );

  const newData = transactionsWithBalances
    ? transactionsWithBalances.map((data) => {
        if (data.description === "Fund Withdrawal")
          return { ...data, description: "Withdrawal" };
        if (data.description === "Wallet Funding")
          return { ...data, description: "Deposit" };
        if (data.description === "Fund Withdrawal Fee")
          return { ...data, description: "Fee" };
        if (data.description === "Fund Transfer")
          return { ...data, description: "Transfer" };
        return data;
      })
    : [];

  const FilterData = newData
    ? newData.filter((data) => {
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
          <StyledCon key={data.id}>
            <div>
              <StyledIconCon>
                {data.is_inflow === 0 ? <IconUp /> : <IconDown />}
              </StyledIconCon>
            </div>
            <div>
              <StyledBody>
                <p>{data.description}</p>
                {/* <span>12:23</span> */}
                <span>{formatTime(data.updated_at)}</span>
              </StyledBody>
            </div>
            <StyledDate>{formatDate(data.created_at)}</StyledDate>
            <StyledAmount inflow={data.is_inflow}>
              {data.is_inflow === 1
                ? `+${formatCurrency(data.amount)}`
                : `-${formatCurrency(data.amount)}`}
            </StyledAmount>
          </StyledCon>
        );
      })}
    </>
  );
}

export default TableColumnMobile;
