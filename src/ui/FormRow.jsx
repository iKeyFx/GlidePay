import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: 13rem 1fr 1fr;
  margin-bottom: 14px;
  align-items: center;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormError = styled.span`
  color: var(--color-red-700);
  font-size: 1rem;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      <label htmlFor={children.props?.id}>{label} </label>
      {children}
      {error && <FormError>{error}</FormError>}
    </StyledFormRow>
  );
}

export default FormRow;
