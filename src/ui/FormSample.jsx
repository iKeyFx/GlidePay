import styled from "styled-components";

const Label = styled.div`
  color: var(--color-teal);
`;

const StyledFormError = styled.span`
  color: var(--color-red-700);
  margin-bottom: 10px;
`;
function FormSample({ label, error, children }) {
  return (
    <>
      <Label htmlFor={children.props?.id}>{label} </Label>
      {children}
      {error && <StyledFormError>{error}</StyledFormError>}
    </>
  );
}

export default FormSample;
