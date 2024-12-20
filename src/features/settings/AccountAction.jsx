import styled from "styled-components";
import Button from "../../ui/Button";
import { Container } from "./AccountSettings";

const Buttons = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
`;
function AccountAction() {
  return (
    <Container>
      <h4>Account Actions</h4>
      <Buttons>
        <p>You will have to contact support for account Reactivation</p>
        <Button sizes="medium" variations="danger">
          Deactivate Account
        </Button>

        <Button sizes="medium" variations="danger">
          Delete Account
        </Button>
      </Buttons>
      <p>
        <b>Note:</b> Delecting an account is irreversible
      </p>
    </Container>
  );
}

export default AccountAction;
