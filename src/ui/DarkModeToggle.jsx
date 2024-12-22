import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import styled from "styled-components";
import { useState } from "react";

const StyledIcon = styled.div`
  background-color: var(--color-light-grey);
  width: 200%;
  height: 30px;
  place-items: center;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  cursor: pointer;
`;

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((dark) => !dark);
  };
  return (
    <StyledIcon onClick={toggleDarkMode}>
      {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </StyledIcon>
  );
}

export default DarkModeToggle;
