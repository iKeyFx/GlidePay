import { useMutation } from "@tanstack/react-query";
import { withdrawToBank } from "../../services/apiWallet";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useWithdrawToBank() {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const {
    mutate: withdrawToBankData,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ amount, pin, bankName, bankAccount }) =>
      withdrawToBank({
        token,
        amount,
        pin,
        bankName,
        bankAccount,
      }),

    onSuccess: () => {
      navigate("/dashboard");
      toast.success("Fund Withdraw Successfully");
    },

    onError: () => {
      toast.error("can't complete transfer");
    },
  });

  return { withdrawToBankData, isPending, error };
}
