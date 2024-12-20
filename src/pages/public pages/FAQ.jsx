import styled from "styled-components";
import FaqDetails from "../../ui/FaqDetails";

const StyledFAQ = styled.div`
  margin: 30px 50px;
  line-height: 1.5;

  li {
    font-weight: bold;
  }
`;

function FAQ() {
  return (
    <StyledFAQ>
      <FaqDetails />
    </StyledFAQ>
  );
}

export default FAQ;
