import Spinner from "./Spinner";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-light-grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { user, isPending } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    queryClient.clear();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (!isPending) {
      if (!user || user.success !== true) {
        // If not authenticated, logout and redirect
        handleLogout();
      } else {
        setIsAuthenticated(true);
      }
    }

    const onStorageChange = (event) => {
      if (event.key === "authToken" && !event.newValue) {
        handleLogout(); // Log out if the token is removed
      }
    };

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, [isPending, user, queryClient, navigate]);

  if (isPending || !isAuthenticated) {
    // Optionally return null or a loading spinner while the check is running
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // Render the children if authenticated
  return children;
}

export default ProtectedRoute;
