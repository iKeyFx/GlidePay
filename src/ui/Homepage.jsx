import styled from "styled-components";
import HomeMain from "./HomeMain";
import Login from "../features/authentication/Login";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  align-items: center;
  margin: 20px;
  padding: 5rem 7rem;
  height: 100%;

  @media (max-width: 992px) {
    height: 100dvh;
    padding: 0;
  }

  @media (max-width: 640px) {
    height: auto;
    grid-template-columns: 1fr;
  }
`;

const StyledLogin = styled.div`
  line-height: 1.5;
`;

function Homepage() {
  return (
    <>
      <StyledMain>
        <StyledLogin>
          <HomeMain />
        </StyledLogin>
        <Login />
      </StyledMain>
    </>
  );
}

export default Homepage;
