import React, { useEffect, useState } from "react";
import { useUser } from "../../features/authentication/useUser";
import styled from "styled-components";
import WalletPin from "../../features/authentication/WalletPin";

const StyledProfileDetails = styled.div`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
`;

const ProfileFull = styled.div`
  margin: 2rem 10rem;

  @media (max-width: 992px) {
    margin: 20px;
  }
`;

const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  border-bottom: 1px solid var(--color-cool-gray);
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProfileDetailsHead = styled.div`
  font-weight: 500;
  line-height: 2;
`;

const UpdateText = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

function Profile() {
  const { user, isPending, isError, error } = useUser();

  if (!isPending && (!user || user.success !== true))
    return <div>Please log in.</div>;
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ProfileFull>
      <section>
        <UpdateText>User Profile</UpdateText>

        <StyledProfileDetails>
          <ProfileDetails>
            <ProfileDetailsHead>First Name: </ProfileDetailsHead>{" "}
            <div>{user.result.first_name}</div>
          </ProfileDetails>{" "}
          <ProfileDetails>
            <ProfileDetailsHead>Last Name: </ProfileDetailsHead>{" "}
            <div>{user.result.last_name}</div>
          </ProfileDetails>{" "}
          <ProfileDetails>
            <ProfileDetailsHead>Email Address: </ProfileDetailsHead>{" "}
            <div>{user.result.email}</div>
          </ProfileDetails>{" "}
        </StyledProfileDetails>
      </section>
      <section>
        <WalletPin />
      </section>
    </ProfileFull>
  );
}

export default Profile;

{
  /* <div>
<h1>
  Welcome, {user.result.first_name} {user.result.last_name}
</h1>
<p>Email: {user.result.email}</p>
</div> */
}
