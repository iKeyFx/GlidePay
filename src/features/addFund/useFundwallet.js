import { useMutation } from "@tanstack/react-query";
import { fundWallet } from "../../services/apiWallet";

export function useFundwallet() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    console.error("Token is missing. Please log in.");
  }

  const {
    mutate: fundWalletHandler,
    error,
    isPending,
  } = useMutation({
    mutationFn: (fundingAmount) => fundWallet({ token, fundingAmount }),

    onSuccess: (response) => {
      const { paymentLink } = response;
      window.location.href = paymentLink;
    },

    onError: (err) => {
      console.error("Funding failed:", err.message);
    },
  });

  return { fundWalletHandler, error, isPending };
}
