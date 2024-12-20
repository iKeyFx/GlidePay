// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { login } from "../../services/apiAuth";
// import { useNavigate } from "react-router";
// import toast from "react-hot-toast";

// export function useLogin() {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();

//   const { mutate: loginTest, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => login({ email, password }),

//     onSuccess: (response) => {
//       console.log(response);
//       const { token, user } = response;

//       //   console.log(token);
//       // Store the token in localStorage
//       localStorage.setItem("authToken", token);

//       // Update React Query cache with the user data
//       queryClient.setQueryData(["user"], user);
//       // Invalidate the "user" query to refetch user data
//       //   queryClient.invalidateQueries(["user"]);

//       // Navigate to the dashboard or protected route
//       //   navigate("/dashboard", { replace: true });

//       toast.success("Login Successfully");
//     },

//     onError: () => {
//       toast.error("Provided email or password are incorrect");
//     },
//   });

//   return { loginTest, isLoading };
// }

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

      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      // Fetch the user profile using the token
      try {
        const userProfile = await getCurrentUser(token);
        // Cache the user profile in React Query
        queryClient.setQueryData(["user"], userProfile);

        // Navigate to a protected route
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
