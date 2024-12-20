import styled from "styled-components";
import { StyledH2, StyledList } from "./AboutDetails";

const StyledContactDiv = styled.div`
  margin-bottom: 10px;
`;

const StyledContactH4 = styled.h4`
  margin-bottom: 5px;
  color: var(--color-teal);
`;
const StyledContactForm = styled.form`
  margin-top: 5px;
  p {
    margin-bottom: 10px;
  }
  input {
    margin-left: 5px;
    margin-bottom: 10px;
  }
`;
function ContactDetails() {
  return (
    <>
      <StyledH2> Contact Us</StyledH2>
      <StyledContactDiv>
        <p>
          We’re here to help! Reach out to us anytime for assistance, feedback,
          or inquiries.
        </p>
        <p>
          <b>Support Email:</b> support@glidepay.com
        </p>
        <p>
          <b>Phone Number:</b> +1 (555) 123-4567
        </p>
        <p>
          <b>Address:</b> 123 Tech Avenue, Innovation City, 45678
        </p>
      </StyledContactDiv>
      <StyledContactH4>Follow Us:</StyledContactH4>
      <StyledList>
        <li>Twitter: @GlidePay</li>
        <li>Facebook: GlidePayOfficial</li>
        <li>LinkedIn: GlidePay</li>
        <li>Twitter: @GlidePay</li>
      </StyledList>

      <StyledContactForm>
        <p>
          Alternatively, fill out the form below, and we’ll get back to you
          shortly.
        </p>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" /> <br />
        <label htmlFor="message">Message:</label>
        <input type="text" name="message" />
        <input type="submit" />
      </StyledContactForm>
    </>
  );
}

export default ContactDetails;
