import AccountSettings from "./AccountSettings";
import SecuritySettings from "./SecuritySettings";
import PaymentSettings from "./PaymentSettings";
import Notification from "./Notification";
import PrivacySetting from "./PrivacySetting";
import AccountAction from "./AccountAction";

function SettingsMainDisplay({ active }) {
  return (
    <>
      {active === "Account Settings" && <AccountSettings />}
      {active === "Security Settings" && <SecuritySettings />}
      {active === "Payment and Billing Settings" && <PaymentSettings />}
      {active === "Notifications" && <Notification />}
      {active === "Privacy Settings" && <PrivacySetting />}
      {active === "Account Actions" && <AccountAction />}
    </>
  );
}

export default SettingsMainDisplay;
