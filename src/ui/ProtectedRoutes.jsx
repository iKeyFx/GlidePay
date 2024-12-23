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
        handleLogout();
      } else {
        setIsAuthenticated(true);
      }
    }

    const onStorageChange = (event) => {
      if (event.key === "authToken" && !event.newValue) {
        handleLogout();
      }
    };

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, [isPending, user, queryClient, navigate]);

  if (isPending || !isAuthenticated) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }
  return children;
}

export default ProtectedRoute;
