import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import Input from "../../ui/Input";

export const Container = styled.div`
  background-color: var(--color-light-grey);
  padding: 3rem;
  border-radius: 10px;

  h4 {
    color: var(--color-teal);
  }
`;

const ProfileCon = styled.div`
  background-color: var(--color-white);
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
`;

const StyledProfileDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.6rem;
`;

const StyledInput = styled.input`
  border: 2px solid var(--color-light-grey);
  padding: 0 0.3rem;
  border-radius: 5px;
  height: 2rem;

  &::placeholder {
    font-weight: 700;
  }
`;

const Styledlanguage = styled.div`
  margin-top: 0.4rem;
`;

const Select = styled.select`
  padding: 0.2rem 0.4rem;
  margin-top: 0.3rem;
`;
function AccountSettings() {
  const { user, isPending, isError, error } = useUser();
  return (
    <Container>
      <div>
        <h4>Profile Information</h4>
        <ProfileCon>
          <StyledProfileDetails>
            <label>First Name: </label>
            <StyledInput
              type="text"
              placeholder={`${user.result.first_name}`}
              disabled
            />
          </StyledProfileDetails>
          <StyledProfileDetails>
            <label>Last Name: </label>
            <StyledInput
              type="text"
              placeholder={`${user.result.last_name}`}
              disabled
            />
          </StyledProfileDetails>
          <StyledProfileDetails>
            <label>Email Address: </label>
            <StyledInput
              type="text"
              placeholder={`${user.result.email}`}
              disabled
            />
          </StyledProfileDetails>
        </ProfileCon>
      </div>
      <div>
        <h4>Language Setting</h4>
        <Styledlanguage>
          <p>Choose default language</p>
          <Select>
            <option>English</option>
            <option>Korea</option>
            <option>Japanese</option>
            <option>India</option>
          </Select>
        </Styledlanguage>
      </div>
    </Container>
  );
}

export default AccountSettings;
