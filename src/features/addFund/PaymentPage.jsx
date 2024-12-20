import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router";
import { useVPayment } from "./useVPayment";
import { useEffect } from "react";
import PageNotFound from "../../pages/public pages/PageNotFound";

const Styledpage = styled.div`
  display: grid;
  place-items: center;
`;
function PaymentPage() {
  const token = localStorage.getItem("authToken");
  const [searchparam] = useSearchParams();
  const status = searchparam.get("status");
  const tx_ref = searchparam.get("tx_ref");
  const tx_id = searchparam.get("transaction_id");

  const { paymentVerify, error, isPending } = useVPayment();
  // console.log(status, tx_ref, tx_id);

  if (!token) {
    console.error("Token is missing. Please log in.");
  }

  useEffect(() => {
    paymentVerify({ token, status, tx_ref, tx_id });
  }, [status, tx_ref, tx_id, paymentVerify, token]);

  if (error && !isPending) return <PageNotFound />;
  return (
    <Styledpage>
      <Spinner />
      <p>Please wait</p>
    </Styledpage>
  );
}

export default PaymentPage;

// http://wallet/verify?status=successful&tx_ref=PID-FBJ4PV9EXU&transaction_id=8238151
