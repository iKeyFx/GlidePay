import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-teal);
  height: 50px;
  text-align: center;
  padding: 10px 0;
  color: var(--color-light-grey);
  margin-top: auto;
`;
function Footer() {
  return (
    <StyledFooter>
      <span>©️Copyright 2024</span>
    </StyledFooter>
  );
}

export default Footer;
