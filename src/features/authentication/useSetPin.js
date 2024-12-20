import { useMutation } from "@tanstack/react-query";
import { setWalletPin } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSetPin() {
  const token = localStorage.getItem("authToken");

  const { mutate, error, isPending } = useMutation({
    mutationFn: ({ Pin, confirmPin }) =>
      setWalletPin({ token, Pin, confirmPin }),

    onSuccess: () => {
      toast.success("Pin created successfully");
    },

    onError: () => {
      toast.error("Pin can't be created");
    },
  });

  return { mutate, error, isPending };
}
