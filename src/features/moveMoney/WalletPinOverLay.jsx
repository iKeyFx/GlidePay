import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useState } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
  padding: 4rem 2rem;

  @media (max-width: 640px) {
    padding: 5rem 1rem;
    font-size: 12px;
    top: 50%;
    left: 20%;
    right: 0%;
    transform: translate(-10%, -50%);
    background-color: var(--color-white);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const ButtonX = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-dark-teal);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: inherit;
  }
`;

function WalletPinOverLay({
  children,
  setIsVisible2,
  resetp2p,
  setIsVisible3,
}) {
  const [isVisible, setIsVisible] = useState(true);
  // console.log(data);
  function onClose() {
    setIsVisible(false); // Hides the overlay
    if (resetp2p) resetp2p();
    if (setIsVisible2) setIsVisible2(false);
    if (setIsVisible3) setIsVisible3(false);
  }

  if (!isVisible) return null;
  return createPortal(
    <Overlay>
      <StyledModal>
        <ButtonX onClick={onClose}>
          <HiXMark />
        </ButtonX>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default WalletPinOverLay;
