import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Logout from "../features/authentication/Logout";

const StyledSidebar = styled.aside`
  background-color: var(--color-cool-gray);
  padding: 1.8rem 1.4rem;
  border-right: 1px solid var(--color-white);
  grid-row: 1 / -1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
  justify-content: space-between;

  @media (max-width: 992px) {
    display: none;
  }
`;

function SideBar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Logout />
    </StyledSidebar>
  );
}

export default SideBar;
