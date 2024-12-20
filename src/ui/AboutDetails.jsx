import styled from "styled-components";

export const StyledAboutP = styled.p`
  margin: 20px 0;
`;
export const StyledH2 = styled.h2`
  margin-bottom: 10px;
  color: var(--color-teal);
`;
export const StyledH3 = styled.h3`
  margin-bottom: 10px;
  color: var(--color-teal);
`;
export const StyledList = styled.ul`
  list-style: circle;
  padding: 0 20px;
`;
function AboutDetails() {
  return (
    <>
      <StyledH2>About Us</StyledH2>
      <StyledAboutP>
        At GlidePay, we believe in making financial transactions effortless and
        accessible for everyone. Our mission is to create a secure and
        innovative platform that simplifies how you manage your money, whether
        it is sending payments, receiving funds, or keeping track of your
        spending. With cutting-edge technology, robust security, and a
        user-first approach, GlidePay is your trusted partner in the digital
        financial world.
      </StyledAboutP>
      <StyledH3>Why Choose GlidePay?</StyledH3>
      <StyledList>
        <li>Seamless transactions</li>
        <li>Advanced security features</li>
        <li>User-friendly design</li>
        <li>Instant access anytime, anywhere</li>
        Join us in reshaping the future of digital payments.
      </StyledList>
    </>
  );
}

export default AboutDetails;
