import { useMutation } from "@tanstack/react-query";
import { walletTransfer } from "../../services/apiWallet";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useFundTransfer() {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const {
    mutate: fundTransfer,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ amount, pin, userAddress }) =>
      walletTransfer({ token, amount, pin, userAddress }),

    onSuccess: () => {
      navigate("/dashboard");
      toast.success("Fund Transfer Successfully");
    },

    onError: (err) => {
      console.log(err.message);
      toast.error(err.message);
    },
  });

  return { fundTransfer, isPending, error };
}
