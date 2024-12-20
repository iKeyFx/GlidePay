import styled from "styled-components";
import Toggle from "../../ui/Toggle";
import { Container } from "./AccountSettings";

const StyledCustom = styled.div`
  margin-top: 2rem;
`;
function Notification() {
  return (
    <Container>
      <div>
        <h4>Notification Preferences</h4>
        <div>
          <div>
            <Toggle label="SMS Notifications" />
            <Toggle label="In-App  Notifications" />
            <Toggle label="Email  Notifications" />
          </div>
        </div>
      </div>

      <StyledCustom>
        <h4>Custom Notification</h4>

        <div>
          <p>Set thresholds for transaction alerts</p>
        </div>
      </StyledCustom>
    </Container>
  );
}

export default Notification;
