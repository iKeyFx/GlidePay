import styled from "styled-components";
import Button from "../../ui/Button";

const StyledOverView = styled.div`
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  background-color: var(--color-white-off);
  padding: 1.4rem 2rem;
  border-top: 2px solid var(--color-cool-gray);

  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledQuickButton = styled.div`
  display: flex;
  gap: 1.5rem;
`;

function QuickAction() {
  return (
    <StyledOverView>
      <div>Overview</div>
      <StyledQuickButton>
        <Button sizes="small" variations="primary">
          Add Fund
        </Button>
        <Button sizes="small" variations="danger">
          Transfer
        </Button>
      </StyledQuickButton>
    </StyledOverView>
  );
}

export default QuickAction;
