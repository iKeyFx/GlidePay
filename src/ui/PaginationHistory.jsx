import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router";
import styled from "styled-components";

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1rem;
  border-top: 2px solid var(--color-cool-gray);

  @media (max-width: 640px) {
    padding: 1rem 0.5rem;
  }
`;

const PaginationButtons = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-teal)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-white)" : "inherit")};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1rem;
    width: 1rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-teal);
    color: var(--color-white);
  }

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`;
const PaginationHead = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;
function PaginationHistory({ pagination }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const currentPage = pagination?.currentPage;
  const totalResults = pagination?.total;
  const startPoint = pagination?.from;
  const endResult = pagination?.to;
  const lastPage = pagination?.lastPage;
  // console.log(pagination);
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const nextPage = () => {
    const next = currentPage !== lastPage ? Number(currentPage) + 1 : lastPage;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage !== 1 ? Number(currentPage) - 1 : 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  // console.log(lastPage);
  return (
    <Pagination>
      <PaginationHead>
        Showing {startPoint + 1} to{" "}
        {currentPage === lastPage ? totalResults : endResult} of {totalResults}{" "}
        results
      </PaginationHead>
      <Buttons>
        <PaginationButtons disabled={currentPage === 1} onClick={prevPage}>
          {" "}
          <HiChevronLeft /> Previous
        </PaginationButtons>
        <PaginationButtons
          disabled={currentPage === lastPage}
          onClick={nextPage}
        >
          Next <HiChevronRight />
        </PaginationButtons>
      </Buttons>
    </Pagination>
  );
}

export default PaginationHistory;
