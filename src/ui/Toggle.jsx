import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
`;
const ToggleSwitch = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${(props) =>
    props.toggleon === "on"
      ? "var(--color-teal)"
      : "var(--color-blue-grey-200 )"};
  border-radius: 25px;
  position: relative;
  transition: background-color 0.3s ease;
  /* margin-left: 15px; */
`;
const ToggleSlider = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--color-white);
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: ${(props) => (props.toggleon === "on" ? "27px" : "3px")};
  transition: left 0.3s ease;
`;

function Toggle({ label }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    console.log(isToggled);
    setIsToggled(!isToggled);

    {
      !isToggled && toast.success("Notification On");
    }
  };

  return (
    <Container>
      <Label>
        {label}
        <ToggleSwitch
          toggleon={isToggled ? "on" : "off"}
          onClick={handleToggle}
          role="switch"
        >
          <ToggleSlider toggleon={isToggled ? "on" : "off"}></ToggleSlider>
        </ToggleSwitch>
      </Label>
    </Container>
  );
}

export default Toggle;
