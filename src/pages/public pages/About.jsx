import styled from "styled-components";
import AboutDetails from "../../ui/AboutDetails";

const StyledAbout = styled.div`
  padding: 50px;
`;

function About() {
  return (
    <StyledAbout>
      <AboutDetails />
    </StyledAbout>
  );
}

export default About;
