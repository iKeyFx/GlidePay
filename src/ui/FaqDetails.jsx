import { StyledH2 } from "./AboutDetails";

function FaqDetails() {
  return (
    <>
      <StyledH2> FAQ/Help Center</StyledH2>
      <h4>Welcome to GlidePay Help Center!</h4>
      <p>Find answers to common questions and guides to get started quickly.</p>
      <ol>
        <li>How do I create an account?</li>{" "}
        <p>
          Sign up using your email or phone number, set a secure password, and
          verify your details to start using GlidePay.
        </p>
        <li>How can I add funds to my wallet?</li>Go to the Add Funds section in
        your dashboard, link your bank account or card, and follow the prompts.
        <li>Is GlidePay secure?</li>Absolutely! We use advanced encryption and
        multi-factor authentication to keep your data and transactions safe.
        <li>What should I do if I encounter an issue?</li> Contact our support
        team via the Contact Us page or email us directly at
        support@glidepay.com.
      </ol>

      <p>
        <b>For more detailed guides, explore the sections below:</b>
      </p>
      <ul>
        <li>Setting Up Your Account</li>
        <li>Sending and Receiving Money</li>
        <li>Managing Linked Accounts</li>
      </ul>

      <p>Still need help? Reach out to us directly for personalized support.</p>
    </>
  );
}

export default FaqDetails;
