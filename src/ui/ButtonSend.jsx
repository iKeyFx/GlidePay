import styled from "styled-components";

const ButtonSend = styled.button`
  color: var(--color-white);
  background-color: var(--color-teal);
  font-size: 0.8rem;
  padding: 0.6rem 3rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border: none;
  position: absolute;
  bottom: 5%;
  right: 4%;
  &:hover {
    color: var(--color-black);
  }
`;

export default ButtonSend;
