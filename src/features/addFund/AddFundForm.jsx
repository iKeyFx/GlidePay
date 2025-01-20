import { useState } from "react";
import { useFundwallet } from "./useFundwallet";
import styled from "styled-components";
import Button from "../../ui/Button";
import { getBank } from "../../services/apiTransaction";
import { useBanks } from "../moveMoney/useBanks";
import toast from "react-hot-toast";

const Form = styled.form`
  display: grid;
  margin-top: 1rem;
`;
const Label = styled.div`
  font-weight: 500;
`;

const StyledInput = styled.input`
  margin: 6px 0px;
  height: 2rem;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;

  @media (max-width: 640px) {
    width: 100%;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledError = styled.span`
  margin-left: 0.4rem;
  color: var(--color-red-700);
`;

const StyledButton = styled(Button)`
  border: none;
  width: 25%;
  border-radius: 8px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;
function AddFundForm() {
  const [value, setValue] = useState(0);
  const { fundWalletHandler, isPending, error: error1 } = useFundwallet();
  const [error, setError] = useState("");
  const { error: error2 } = useBanks();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (!/^\d*\.?\d*$/.test(inputValue)) {
      setError("Please enter a valid number.");
      setValue(inputValue);
      return;
    }

    if (parseFloat(inputValue) <= 0) {
      setError("Amount must be greater than or equal to zero.");
      setValue(inputValue);
      return;
    }

    setError("");
    setValue(inputValue);
  };

  function handleClick(e) {
    e.preventDefault();
    if (error2 !== "") {
      toast.error("Set up your wallet PIN to proceed with transaction");
    }
    fundWalletHandler(value);
  }

  return (
    <Form>
      <div>
        <Label htmlFor="amount">Input amount below : </Label>
        <StyledInput
          type="number"
          id="amount"
          onChange={handleInputChange}
          placeholder="Enter amount"
          disabled={isPending}
        />

        {error ? <StyledError>{error}</StyledError> : ""}
      </div>{" "}
      <StyledButton
        sizes="small"
        variations="primary"
        disabled={!value || isPending || value <= 0}
        onClick={handleClick}
      >
        {isPending ? "Please wait..." : `Add  ${value ? value : ""}`}
      </StyledButton>
    </Form>
  );
}

export default AddFundForm;
