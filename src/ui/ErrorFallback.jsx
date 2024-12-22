import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Heading from "./Heading";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-light-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  border-radius: 8px;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Something went wrong 🥺</Heading>
          <p>{error.message}</p>
          <Button sizes="large" onClick={resetErrorBoundary}>
            Try again
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
