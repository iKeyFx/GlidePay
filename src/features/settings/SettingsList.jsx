import styled, { css } from "styled-components";

import { CgDanger } from "react-icons/cg";
import { FcPrivacy } from "react-icons/fc";
import { GrShieldSecurity } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import {
  MdOutlineAppSettingsAlt,
  MdOutlineManageAccounts,
  MdOutlineNotificationsActive,
  MdOutlinePayment,
} from "react-icons/md";

const Header = styled.div`
  margin-bottom: 1rem;
`;

const StyledTextCon = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background-color: var(--color-light-grey);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 0.3rem;

  &[disabled] {
    pointer-events: none;
    opacity: 0.7;
  }
  span {
    font-size: 10px;
  }

  p {
    font-weight: 500;
    color: var(--color-teal);
  }

  &:hover {
    background-color: var(--white-off);
    margin: 0.4rem 0;
    box-shadow: -2px 3px 11px 1px rgba(59, 57, 57, 0.53);
    -webkit-box-shadow: -2px 3px 11px 1px rgba(59, 57, 57, 0.53);
    -moz-box-shadow: -2px 3px 11px 1px rgba(59, 57, 57, 0.53);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--white-off);
      margin: 0.4rem 0;
      box-shadow: -2px 3px 11px 1px rgba(59, 57, 57, 0.53);
      -webkit-box-shadow: -2px 3px 11px 1px rgba(59, 57, 57, 0.53);
      -moz-box-shadow: -2px 3px 11px 1px rgba(59, 57, 57, 0.53);
    `}
`;

const StyledIcon1 = styled.div`
  background-color: var(--color-white);
  height: 30px;
  width: 30px;
  display: flex;
  place-items: center;
  justify-content: center;
  margin-right: 20px;
  border-radius: 8px;
`;
const StyledIcon2 = styled.div`
  margin-left: auto;
`;
function SettingsList({ active, handleActive, handleClick }) {
  return (
    <div>
      <Header>
        <h2>Settings</h2>
      </Header>
      <div>
        <StyledTextCon
          active={active === "Account Settings"}
          onClick={() => {
            handleActive("Account Settings");
            handleClick("account_settings");
          }}
        >
          <StyledIcon1>
            <MdOutlineManageAccounts />
          </StyledIcon1>

          <div>
            <p>Account Settings</p>
            <span>Profile Information, Language Preferences, Time Zone</span>
          </div>

          <StyledIcon2>
            <IoIosArrowForward />
          </StyledIcon2>
        </StyledTextCon>
        <StyledTextCon
          disabled
          active={active === "Security Settings"}
          onClick={() => {
            handleActive("Security Settings");
            handleClick("security_settings");
          }}
        >
          <StyledIcon1>
            <GrShieldSecurity />
          </StyledIcon1>

          <div>
            <p>Security Settings</p>
            <span>
              Password Management, Two-Factor Authentication (2FA), Active
              Sessions
            </span>
          </div>

          <StyledIcon2>
            <IoIosArrowForward />
          </StyledIcon2>
        </StyledTextCon>
        <StyledTextCon
          disabled
          active={active === "Payment and Billing Settings"}
          onClick={() => {
            handleActive("Payment and Billing Settings");
            handleClick("payment_and_billing_settings");
          }}
        >
          <StyledIcon1>
            <MdOutlinePayment />
          </StyledIcon1>

          <div>
            <p>Payment and Billing Settings</p>
            <span>Linked Accounts, Autopay Options</span>
          </div>

          <StyledIcon2>
            <IoIosArrowForward />
          </StyledIcon2>
        </StyledTextCon>{" "}
        <StyledTextCon
          active={active === "Notifications"}
          onClick={() => {
            handleActive("Notifications");
            handleClick("notifications");
          }}
        >
          <StyledIcon1>
            <MdOutlineNotificationsActive />
          </StyledIcon1>

          <div>
            <p>Notifications</p>
            <span>Notification Preferences, Custom Notification Settings</span>
          </div>

          <StyledIcon2>
            <IoIosArrowForward />
          </StyledIcon2>
        </StyledTextCon>
        <StyledTextCon
          disabled
          active={active === "Privacy Settings"}
          onClick={() => {
            handleActive("Privacy Settings");
            handleClick("privacy_settings");
          }}
        >
          <StyledIcon1>
            <FcPrivacy />
          </StyledIcon1>

          <div>
            <p>Privacy Settings</p>
            <span>Data Sharing, Block List, Block List</span>
          </div>

          <StyledIcon2>
            <IoIosArrowForward />
          </StyledIcon2>
        </StyledTextCon>
        <StyledTextCon
          active={active === "Account Actions"}
          onClick={() => {
            handleActive("Account Actions");
            handleClick("account_actions");
          }}
        >
          <StyledIcon1>
            <CgDanger />
          </StyledIcon1>

          <div>
            <p>Account Actions</p>
            <span>Deactivate Account, Delete Account</span>
          </div>

          <StyledIcon2>
            <IoIosArrowForward />
          </StyledIcon2>
        </StyledTextCon>
      </div>
    </div>
  );
}

export default SettingsList;
