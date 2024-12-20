import styled from "styled-components";
import { HiArrowLongRight } from "react-icons/hi2";
import Filter from "./Filter";
import Sort from "./Sort";
import { Link, useSearchParams } from "react-router";
import { useHistory } from "../features/history/useHistory";
import TableColumn from "./TableColumn";

const StyledTable = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 100%;
  background-color: var(--color-white);
`;

const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;

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

const FilterSort = styled.div`
  display: flex;
`;

const TableBody = styled.section`
  margin-top: 0.5rem;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

const FooterLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.2rem;
  font-size: 12px;
  cursor: pointer;

  margin: 10px 5px 0 0;

  &:hover {
    color: var(--color-teal);
  }
`;
function Table() {
  const { data: details, isPending } = useHistory();
  const [searchParams] = useSearchParams();

  const data = details?.result?.data;
  const FilterData = data
    ? data.filter((data) => {
        const transactionType = searchParams.get("recent_transaction");
        if (!transactionType || transactionType === "recent_all") return true;
        if (transactionType === "recent_deposit") return data.is_inflow === 1;
        if (transactionType === "recent_withdrawal")
          return data.is_inflow === 0;
      })
    : [];
  return (
    <StyledTable role="row" as="header">
      <StyledTableHeader>
        <div>
          <p>Recent Transactions</p>
        </div>
        <FilterSort>
          <Filter
            filterField="recent_transaction"
            options={[
              { value: "recent_all", label: "All" },
              { value: "recent_deposit", label: "Deposit" },
              { value: "recent_withdrawal", label: "Withdrawal" },
            ]}
          />
          <Sort />
        </FilterSort>
      </StyledTableHeader>
      <hr />

      <TableBody>
        <TableColumn data={FilterData} isPending={isPending} />
      </TableBody>

      <Footer>
        <hr />
        <FooterLink to="/history">
          <span>View more</span>
          <HiArrowLongRight />
        </FooterLink>
      </Footer>
    </StyledTable>
  );
}

export default Table;
