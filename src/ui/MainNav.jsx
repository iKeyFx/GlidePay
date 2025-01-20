import styled, { css } from "styled-components";

import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoHelpBuoyOutline, IoSettingsOutline } from "react-icons/io5";
import { TbArrowsTransferUp } from "react-icons/tb";
import { NavLink } from "react-router";
import { PiMoneyLight } from "react-icons/pi";
import { useActiveMatch } from "../hooks/useActiveMatch";

const StyledNavUl = styled.ul`
  margin: 15px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 15px;
  font-size: 15px;

  &:hover {
    color: var(--color-teal);
  }
  ${(props) =>
    props.active &&
    css`
      color: var(--color-teal);
    `}
`;

const StyledNav2 = styled.ul`
  margin: 15px;
`;
const StyledMainNav = styled.nav`
  margin-bottom: auto;
`;

const StyledLine = styled.hr`
  color: var(--color-teal);
  margin: 40px 0 10px;
  width: calc(100% + 44px);
  margin-left: -22px;
`;

function MainNav({ onClose }) {
  return (
    <StyledMainNav>
      <StyledNavUl>
        <li>
          <StyledNavLink
            to="dashboard"
            {...(useActiveMatch("dashboard") ? { active: "true" } : {})}
            onClick={onClose}
          >
            <HiOutlineViewGrid />
            <span>Overview</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="move-fund"
            onClick={onClose}
            {...(useActiveMatch("move-fund") ? { active: "true" } : {})}
          >
            <FaMoneyBillTransfer />
            <span>Transfer Fund</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="add-fund"
            onClick={onClose}
            {...(useActiveMatch("add-fund") ? { active: "true" } : {})}
          >
            <PiMoneyLight />
            <span>Add Fund</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="history"
            onClick={onClose}
            {...(useActiveMatch("history") ? { active: "true" } : {})}
          >
            <TbArrowsTransferUp />
            <span>Transaction</span>
          </StyledNavLink>
        </li>
      </StyledNavUl>

      <StyledLine />
      <StyledNav2>
        <li>
          <StyledNavLink
            to="settings"
            onClick={onClose}
            {...(useActiveMatch("settings") ? { active: "true" } : {})}
          >
            <IoSettingsOutline />
            <span>Setting</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="support"
            onClick={onClose}
            {...(useActiveMatch("support") ? { active: "true" } : {})}
          >
            <IoHelpBuoyOutline />
            <span> Help & Support</span>
          </StyledNavLink>
        </li>
      </StyledNav2>
    </StyledMainNav>
  );
}

export default MainNav;
