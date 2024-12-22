import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ eMail, password, firstName, LastName }) =>
      register({ eMail, password, firstName, LastName }),

    onSuccess: () => {
      navigate("/login", { replace: true });
      toast.success("New User Created Successfully");
    },

    onError: () => {
      toast.error("New User Can't be Created");
    },
  });

  return { signUp, isPending };
}
