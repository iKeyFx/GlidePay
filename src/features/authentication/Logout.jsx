import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledLogOut = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 15px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: var(--color-teal);
  }
  &:focus {
    outline: none;
  }
`;
function Logout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function handlelogout() {
    localStorage.removeItem("authToken");
    queryClient.clear();
    navigate("/login", { replace: true });
    toast.success("User Logged  out Successfully");
  }
  return (
    <div>
      <StyledLogOut onClick={handlelogout}>
        <BiLogOut />
        <span>Logout</span>
      </StyledLogOut>
    </div>
  );
}

export default Logout;
