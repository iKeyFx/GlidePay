import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import styled from "styled-components";
import MenuOverLay from "./MenuOverlay";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: var(--color-teal);

  @media (min-width: 1440px) {
    height: 80px;
  }
  @media (max-width: 640px) {
    height: 60px;
  }
`;

const StyledLogoImage = styled.img`
  width: 80px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 50px;
    height: 30px;
  }
`;
const StyledListHead = styled.ul`
  display: flex;
  gap: 0.9rem;
  list-style: none;
  cursor: pointer;
  font-size: 14px;
  li {
    color: var(--color-light-grey);
  }

  li:hover {
    color: #000;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledListHeadMobile = styled.ul`
  @media (max-width: 640px) {
    display: flex;
    gap: 3rem;
    list-style: none;
    cursor: pointer;
    font-size: 16px;
    flex-direction: column;

    li {
      color: var(--color-teal);
    }

    li:hover {
      color: #000;
    }
  }
`;

const StyledHambuger = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled(IoMenuOutline)`
  width: 100%;
  height: 30px;
`;
function HeaderPublic() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledLogoImage
        src="glidepay-logo-2.png"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <div>
        <StyledHambuger>
          <Icon onClick={handleOpen} />
        </StyledHambuger>
        <MenuOverLay isVisible={openMenu} onClose={handleClose}>
          <StyledListHeadMobile>
            <li
              onClick={() => {
                navigate("/");
                handleClose();
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("about");
                handleClose();
              }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("contact");
                handleClose();
              }}
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                navigate("faq");
                handleClose();
              }}
            >
              FAQ/Help Center
            </li>
          </StyledListHeadMobile>
        </MenuOverLay>
        <StyledListHead>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("about")}>About Us</li>
          <li onClick={() => navigate("contact")}>Contact Us</li>
          <li onClick={() => navigate("faq")}>FAQ/Help Center</li>
        </StyledListHead>
      </div>
    </StyledHeader>
  );
}

export default HeaderPublic;
