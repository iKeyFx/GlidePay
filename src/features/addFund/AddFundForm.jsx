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
  /* width: 100%; */
  height: 2rem;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
`;

const StyledError = styled.span`
  margin-left: 0.4rem;
  color: var(--color-red-700);
`;

const StyledButton = styled.button`
  color: var(--color-white);
  background-color: var(--color-teal);
  font-size: 0.8rem;
  padding: 0.4rem 2rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border: none;
  width: 25%;

  &:hover {
    background-color: var(--color-dark-teal);
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
        // sizes="small"
        disabled={!value || isPending || value <= 0}
        onClick={handleClick}
      >
        {isPending ? "Please wait..." : `Add  ${value || "0"}`}
      </StyledButton>
    </Form>
  );
}

export default AddFundForm;
