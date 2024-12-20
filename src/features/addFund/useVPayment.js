import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyPayment } from "../../services/apiWallet";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useVPayment() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: paymentVerify,
    error,
    isPending,
  } = useMutation({
    mutationFn: ({ token, status, tx_ref, tx_id }) =>
      verifyPayment({ token, status, tx_ref, tx_id }),

    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["history"] });
      navigate("/dashboard");

      toast.success(response.message, {
        id: "success-toast",
      });
    },

    onError: (err) => {
      toast.error("Funding Failed");
    },
  });

  return { paymentVerify, error, isPending };
}
