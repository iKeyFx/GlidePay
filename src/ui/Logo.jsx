import styled from "styled-components";

const StyledLogo = styled.div`
  display: grid;
  place-items: center;
`;

const Image = styled.img`
  width: 40%;
`;

const StyledH2 = styled.h2`
  color: var(--color-teal);
  margin-top: 4px;
`;

function Logo() {
  return (
    <StyledLogo>
      <Image src="glidepay-logo-2.png" alt="Logo" />
      <StyledH2>GlidePay</StyledH2>
    </StyledLogo>
  );
}

export default Logo;
