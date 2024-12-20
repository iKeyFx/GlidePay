import { useState } from "react";
import { useSearchParams } from "react-router";
import styled from "styled-components";

import SettingsList from "./SettingsList";
import SettingsMainDisplay from "./SettingsMainDisplay";

const StyledSupport = styled.div`
  background-color: var(--color-white);
  margin-top: 0.2rem;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 30rem 1fr;
  min-height: 100dvh;
  gap: 0.5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

function Settings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState("");

  const handleActive = (link) => {
    setActive((prev) => (prev === link ? prev : link));
  };

  const handleClick = (value) => {
    searchParams.set("settings", value);
    setSearchParams(searchParams);
  };
  return (
    <StyledSupport>
      <SettingsList
        handleActive={handleActive}
        handleClick={handleClick}
        active={active}
      />

      <div>
        <SettingsMainDisplay active={active} />
      </div>
    </StyledSupport>
  );
}

export default Settings;
