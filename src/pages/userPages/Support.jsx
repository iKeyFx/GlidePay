import { useState } from "react";
import { BsHeadset } from "react-icons/bs";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLiveHelp, MdReviews } from "react-icons/md";
import styled, { css } from "styled-components";

const StyledSupport = styled.div`
  background-color: var(--color-white);
  margin-top: 0.2rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: self-start;
    grid-template-rows: 3rem 1fr;
  }
`;

const Header = styled.div`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  padding: 15px 40px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid var(--color-cool-gray);
  background-color: var(--color-light-grey);
  width: 100%;

  &::placeholder {
    font-size: 15px;
  }
`;

const InputCon = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
const StyledSearchIcon = styled.span`
  position: absolute;
  left: 5%;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 992px) {
    left: 3%;
    bottom: 40%;
    top: 55%;
  }
`;

const StyledTextCon = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-light-grey);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 0.3rem;

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
function Support() {
  const [searchIcon, setSearchIcon] = useState(true);
  const [active, setActive] = useState("");

  const handleActive = (link) => {
    setActive((prev) => (prev !== link ? link : ""));
  };

  function handleClick() {
    setSearchIcon(false);
  }

  function handleBlur() {
    setSearchIcon(true);
  }
  return (
    <StyledSupport>
      <Header>
        <h2>Help & Support</h2>
      </Header>
      <div>
        <InputCon>
          <p>Search for a question</p>
          <StyledInput
            type="text"
            onFocus={handleClick}
            onBlur={handleBlur}
            placeholder="Search"
          />
          <StyledSearchIcon>{searchIcon && <FaSearch />}</StyledSearchIcon>
        </InputCon>

        <div>
          <StyledTextCon
            active={active === "Support"}
            onClick={() => handleActive("Support")}
          >
            <StyledIcon1>
              <BsHeadset />
            </StyledIcon1>

            <div>
              <p>Support Center</p>
              <span>Your request was approved</span>
            </div>

            <StyledIcon2>
              <IoIosArrowForward />
            </StyledIcon2>
          </StyledTextCon>
          <StyledTextCon
            active={active === "personal"}
            onClick={() => handleActive("personal")}
          >
            <StyledIcon1>
              <MdLiveHelp />
            </StyledIcon1>

            <div>
              <p>Personal Assistant</p>
              <span>New message</span>
            </div>

            <StyledIcon2>
              <IoIosArrowForward />
            </StyledIcon2>
          </StyledTextCon>
          <StyledTextCon
            active={active === "security"}
            onClick={() => handleActive("security")}
          >
            <StyledIcon1>
              <FaCheckCircle />
            </StyledIcon1>

            <div>
              <p>Security</p>
              <span>Your password was changed</span>
            </div>

            <StyledIcon2>
              <IoIosArrowForward />
            </StyledIcon2>
          </StyledTextCon>{" "}
          <StyledTextCon
            active={active === "faq"}
            onClick={() => handleActive("faq")}
          >
            <StyledIcon1>
              <MdReviews />
            </StyledIcon1>

            <div>
              <p>FAQ</p>
              <span>Common question</span>
            </div>

            <StyledIcon2>
              <IoIosArrowForward />
            </StyledIcon2>
          </StyledTextCon>
        </div>
      </div>
    </StyledSupport>
  );
}

export default Support;
