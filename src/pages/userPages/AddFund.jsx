import styled from "styled-components";

import InstructAddFund from "../../features/addFund/InstructAddFund";
import AddFundForm from "../../features/addFund/AddFundForm";

const StyledAddCon = styled.div`
  margin: 2rem;
  background-color: var(--color-white);
  padding: 4rem;
  height: 26rem;

  @media (max-width: 640px) {
    padding: 3rem;
    height: 100dvh;
  }
`;

const StyledMain = styled.div`
  display: grid;
  gap: 0.8rem;
  line-height: 1.5;
`;

function AddFund() {
  return (
    <StyledAddCon>
      <StyledMain>
        <InstructAddFund />
        <AddFundForm />
      </StyledMain>
    </StyledAddCon>
  );
}

export default AddFund;
