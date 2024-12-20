import styled from "styled-components";
import HeaderUser from "./HeaderUser";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 992px) {
    grid-template-columns: auto;
  }
`;

const Main = styled.main``;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayoutUser() {
  return (
    <StyledLayout>
      <HeaderUser />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledLayout>
  );
}

export default AppLayoutUser;
