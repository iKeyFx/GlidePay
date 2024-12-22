import { useState } from "react";
import { useFundwallet } from "./useFundwallet";
import styled from "styled-components";
import Button from "../../ui/Button";

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
  const { fundWalletHandler, isPending } = useFundwallet();
  const [error, setError] = useState("");

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
        {isPending ? "Please wait..." : `Add  ${value || "0"}`}
      </StyledButton>
    </Form>
  );
}

export default AddFundForm;
