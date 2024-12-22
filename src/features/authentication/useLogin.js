import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, getCurrentUser } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginTest, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),

    onSuccess: async (response) => {
      const { token } = response;

      localStorage.setItem("authToken", token);

      try {
        const userProfile = await getCurrentUser(token);
        queryClient.setQueryData(["user"], userProfile);

        navigate("/dashboard", { replace: true });

        toast.success("Login Successfully");
      } catch (error) {
        toast.error("Failed to fetch user profile");
        console.error("Error fetching user profile:", error);
      }
    },

    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { loginTest, isPending };
}
