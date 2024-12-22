import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router";
import styled from "styled-components";
import SideBar from "./SideBarTab";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  background-color: var(--color-white-off);
  @media (max-width: 992px) {
    padding: 1rem 2rem 1rem 1rem;
    justify-content: space-between;
  }
`;

const StyledHeaderUl = styled.ul`
  display: flex;
  gap: 2rem;
`;

const StyledIcon = styled.div`
  background-color: var(--color-light-grey);
  width: 200%;
  height: 30px;
  place-items: center;
  display: flex;
  border-radius: 50%;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  &:hover {
    color: var(--color-teal);
  }
`;

const StyledInput = styled.input`
  border-radius: 8px;
  border: none;
  background-color: var(--color-light-grey);
  padding: 4px 10px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledHambuger = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled(IoMenuOutline)`
  width: 100%;
  height: 30px;
`;
function HeaderUser() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <StyledHeader>
      <StyledHambuger>
        <Icon onClick={handleOpen} />

        <SideBar isVisible={openMenu} onClose={handleClose} />
      </StyledHambuger>
      <div>
        <StyledHeaderUl>
          <li>
            <StyledInput type="text" placeholder="search..." />
          </li>
          <li>
            <StyledIcon>
              <StyledNavLink to="profile">
                <CiUser />
              </StyledNavLink>
            </StyledIcon>
          </li>

          <li>
            <StyledNavLink>
              <DarkModeToggle />
            </StyledNavLink>
          </li>
        </StyledHeaderUl>
      </div>
    </StyledHeader>
  );
}

export default HeaderUser;
