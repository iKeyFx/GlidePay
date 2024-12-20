import styled from "styled-components";
import ContactDetails from "../../ui/ContactDetails";

const StyledContact = styled.div`
  padding: 50px;
`;

function Contact() {
  return (
    <StyledContact>
      <ContactDetails />
    </StyledContact>
  );
}

export default Contact;
