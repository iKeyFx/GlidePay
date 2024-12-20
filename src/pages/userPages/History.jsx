import styled from "styled-components";
import PaginationHistory from "../../ui/PaginationHistory";
import TableColumn from "../../features/history/TableColumn";
import Filter from "../../ui/Filter";
import { useHistoryFull } from "../../features/history/usehistoryFull";
import { useSearchParams } from "react-router";
import TableColumnMobile from "../../features/history/TableColumnMobile";

const StyledTableCon = styled.div`
  /* padding: 2rem; */
  background-color: var(--color-white);
  margin: 10px;
`;

const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  padding: 2rem;
  border-bottom: 2px solid var(--color-cool-gray);

  @media (max-width: 640px) {
    padding: 2rem 1rem;
    h4 {
      font-size: 14px;
    }
  }
`;

const StyledTableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  padding: 1rem;
  border-bottom: 2px solid var(--color-cool-gray);

  @media (max-width: 640px) {
    display: none;
  }
`;

const MobileShow = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

function History() {
  const { data, isPending } = useHistoryFull();
  // const { data, isPending } = useHistory();
  const [searchParams] = useSearchParams();

  const moveTest = searchParams.get("page");
  const history = data?.result?.data;
  const pagination = data?.result?.pagination;

  const newPagination = {
    currentPage: !moveTest || moveTest === 1 ? "1" : moveTest,
    from: !moveTest || moveTest === 1 ? 0 : moveTest + 1 - 11,
    perPage: "10",
    lastPage: Math.ceil(pagination?.total / 10),
    to: !moveTest || moveTest === 1 ? 10 : moveTest + 1 - 1,
    total: pagination?.total,
  };
  return (
    <StyledTableCon>
      <StyledTableHeader>
        <h4>Transaction History</h4>
        <div>
          <Filter
            history="true"
            filterField="history"
            options={[
              { value: "all", label: "All" },
              { value: "deposit", label: "Deposit" },
              { value: "withdrawal", label: "Withdrawal" },
            ]}
          />
        </div>
      </StyledTableHeader>
      <section>
        <StyledTableHead>
          <p>Date</p>
          <p>Description</p>
          <p>Fee</p>
          <p>Withrawals</p>
          <p>Deposits</p>
          <p>Balance</p>
        </StyledTableHead>

        <div>
          <TableColumn
            history={history}
            isPending={isPending}
            newPagination={newPagination}
          />
        </div>
        <MobileShow>
          <TableColumnMobile
            history={history}
            isPending={isPending}
            newPagination={newPagination}
          />
        </MobileShow>
      </section>
      <PaginationHistory pagination={newPagination} />
    </StyledTableCon>
  );
}
export default History;
