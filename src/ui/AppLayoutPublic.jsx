import { Outlet } from "react-router";
import Footer from "./Footer";
import HeaderPublic from "./HeaderPublic";
import styled from "styled-components";

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;

  @media (max-width: 992px) {
    height: 100vh;
    /* grid-template-rows: auto 20rem auto; */
  }
`;

function AppLayoutPublic() {
  return (
    <AppLayout>
      <HeaderPublic />
      <Outlet />
      <Footer />
    </AppLayout>
  );
}

export default AppLayoutPublic;
