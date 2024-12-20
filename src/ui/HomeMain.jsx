import styled from "styled-components";

const StyledGlideCon = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* gap: 1rem; */
    margin-bottom: 1rem;
  }
`;
const StyledWelComeGlide = styled.span`
  display: grid;
  font-weight: 500;
  font-style: italic;
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;
const StyledGlide = styled.span`
  line-height: 1.2;
  font-size: 4rem;
  font-weight: 800;
  font-style: italic;
  color: var(--color-teal);

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;
const StyledP = styled.p`
  padding-right: 5rem;
  margin-top: 5px;
  line-height: 1.5;
  font-size: 14px;

  @media (max-width: 992px) {
    padding-right: 3rem;
    font-size: 12px;
  }

  @media (max-width: 640px) {
    /* padding-right: 2rem; */
    font-size: 12px;
  }
`;
function HomeMain() {
  return (
    <StyledGlideCon>
      <div>
        <StyledWelComeGlide>Welcome To</StyledWelComeGlide>{" "}
        <StyledGlide>GlidePay</StyledGlide>
      </div>
      <StyledP>
        secure and user-friendly e-wallet that lets you send, receive, and
        manage money effortlessly. With features like instant transactions, easy
        bill payments, and detailed spending insights, GlidePay makes digital
        payments simple, fast, and safe.
      </StyledP>
    </StyledGlideCon>
  );
}

export default HomeMain;
