import { useState } from "react";
import { FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";
import { useSearchParams } from "react-router";
import styled from "styled-components";

const StyledSort = styled.div`
  margin: 0 0.5rem;
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
  place-items: center;

  &:hover {
    color: var(--color-teal);
  }
`;

const Styledspan = styled.span`
  display: flex;
`;
function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [icon, setIcon] = useState(true);

  function handleSort(value) {
    searchParams.set("sort-by", value);
    setSearchParams(searchParams);
    setIcon((prevState) => !prevState);
  }

  return (
    <StyledSort onClick={() => handleSort(icon ? "amt_desc" : "amt_asc")}>
      <p>Sort</p>
      <Styledspan>
        {icon ? <FaSortAmountDown /> : <FaSortAmountUpAlt />}
      </Styledspan>
    </StyledSort>
  );
}

export default Sort;
