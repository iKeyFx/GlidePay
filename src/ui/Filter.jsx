import styled, { css } from "styled-components";
import { useSearchParams } from "react-router";

const StyledFilter = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledButton = styled.button`
  background-color: var(--color-white-off);
  padding: ${(prop) => (prop.history ? "0.6rem 0.8rem" : "0.2rem 0.6rem")};
  border-radius: ${(prop) => (prop.history ? "12px" : "20px")};
  font-weight: 600;
  font-size: 0.6rem;
  border: 1px solid var(--color-teal);
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-teal);
    color: var(--color-white);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-teal);
      color: var(--color-white);
    `}

  @media (max-width: 1024px) {
    font-size: 0.4rem;
    font-weight: 500;
    padding: ${(prop) => (prop.history ? "0.6rem 0.8rem" : "0.2rem 0.6rem")};
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const Select = styled.select`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    border: none;
    font-weight: 600;
    font-size: 12px;
    color: var(--color-teal);
    transition: all 0.3s;

    &:focus {
      outline: none;
    }
  }
`;

const StyledOption = styled.option``;
function Filter({ filterField, options, history }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get(filterField) || options.at(0).value;

  function handleFilter(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <StyledButton
          history={history}
          key={option.value}
          onClick={() => handleFilter(option.value)}
          active={option.value === activeFilter}
          disabled={option.value === activeFilter}
        >
          {option.label}
        </StyledButton>
      ))}

      <Select
        name="filter"
        value={activeFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </Select>
    </StyledFilter>
  );
}

export default Filter;
