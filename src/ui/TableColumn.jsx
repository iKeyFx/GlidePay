import styled, { css } from "styled-components";
import { formatCurrency, formatDate } from "../utils/helpers";
import Spinner from "./Spinner";

const StyledTableColomn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 0.8rem;
  font-size: 14px;

  &:nth-child(even) {
    background-color: var(--color-light-grey);
  }
  &:first-child {
    margin-top: 0.4rem;
  }

  @media (max-width: 1024px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 640px) {
    p {
      font-size: 10px;
    }
  }
`;

const statuscolor = {
  successful: css`
    color: var(--color-teal);
  `,
  pending: css`
    color: #9e9e9e;
  `,
  failed: css`
    color: var(--color-red-700);
  `,

  1: css`
    color: var(--color-teal);
  `,
  0: css`
    color: var(--color-red-700);
  `,
};

const StyledP = styled.p`
  ${(props) => statuscolor[props.statuscolor]}
  ${(props) => statuscolor[props.statuscolor]}
`;
const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
`;

function TableColumn({ data, isPending }) {
  // Safely check if `data` exists and is an array
  //   if ((!data && !isPending) || !Array.isArray(data) || data.length === 0) {
  //     return <Empty>No recent Transaction</Empty>;
  //   }
  if (!data && !isPending) {
    return <Empty>No recent Transaction</Empty>;
  }

  const newData = data
    ? data.map((data) => {
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

  if (isPending) return <Spinner />;

  return (
    <>
      {newData.map((data, index) => (
        <StyledTableColomn role="row" key={index}>
          <p>{data.description}</p>
          <p>{formatDate(data.created_at)}</p>
          <StyledP statuscolor={data.is_inflow}>
            {data.is_inflow === 1
              ? `+ ${formatCurrency(data.amount)}`
              : `- ${formatCurrency(data.amount)}`}
          </StyledP>
          <StyledP statuscolor={data.status.toLowerCase()}>
            {data.status}
          </StyledP>
        </StyledTableColomn>
      ))}
    </>
  );
}

export default TableColumn;
