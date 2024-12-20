import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Logout from "../features/authentication/Logout";
import { IoCloseSharp } from "react-icons/io5";

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: flex-start;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.visible {
    transform: translateX(0);
  }
`;

const StyledSidebar = styled.aside`
  background-color: var(--color-cool-gray);
  width: 30%;

  min-height: 100dvh;
  padding: 1.8rem 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px) {
    width: 60%;
    justify-content: initial;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-black);
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
`;

function MenuOverLay({ isVisible, onClose, children }) {
  return (
    <OverlayContainer className={isVisible ? "visible" : ""}>
      <StyledSidebar>
        <CloseButton onClick={onClose}>
          <IoCloseSharp />
        </CloseButton>
        {children}
        {/* <Logo />
        <MainNav onClose={onClose} />
        <Logout /> */}
      </StyledSidebar>
    </OverlayContainer>
  );
}

export default MenuOverLay;
