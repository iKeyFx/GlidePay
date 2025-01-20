import { Container } from "./AccountSettings";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import styled from "styled-components";

const NewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100dvh;

  span {
    color: red;
  }

  Button {
    margin-top: 8px;
  }
`;
function SecuritySettings() {
  const navigate = useNavigate();

  return (
    <NewContainer>
      <div>
        <p>
          Note: <span>Click the button below to set your wallet pin</span>
        </p>
        <Button onClick={() => navigate("/profile")}>
          Click to set Wallet Pin
        </Button>
      </div>
      <div>2FA</div>
      <div>Active Sessions</div>
    </NewContainer>
  );
}

export default SecuritySettings;
