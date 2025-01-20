import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useSetPin } from "./useSetPin";
import SpinnerMini from "../../ui/SpinnerMini";
const StyledSetPin = styled.div`
  margin-top: 4rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: flex-end;
  margin-top: 15px;
`;

const Form = styled.form`
  background-color: var(--color-white);
  padding: 2rem;
`;

const WalletHeader = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const WalletDiv = styled.div`
  border-bottom: 1px solid var(--color-cool-gray);
  margin-bottom: 10px;
`;
function WalletPin() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { mutate: setPinLogic, isPending } = useSetPin();

  function handleOnSubmit({ Pin, confirmPin }) {
    console.log({ Pin, confirmPin });

    setPinLogic(
      { Pin, confirmPin },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }
  return (
    <StyledSetPin>
      <WalletHeader>Set Wallet Pin</WalletHeader>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <WalletDiv>
          <FormRow label="Pin" error={errors?.Pin?.message}>
            <Input
              type="number"
              id="Pin"
              disabled={isPending}
              {...register("Pin", {
                required: "Please enter your 4 digit pin",
                minLength: {
                  value: 4,
                  message: "Your pin must be 4 digit",
                },
                maxLength: {
                  value: 4,
                  message: "Pin must not exceed 4 digit",
                },
              })}
            />
          </FormRow>
        </WalletDiv>

        <WalletDiv>
          <FormRow label="Confirm Pin" error={errors?.confirmPin?.message}>
            <Input
              type="number"
              id="confirmPin"
              disabled={isPending}
              {...register("confirmPin", {
                required: "This field is required",
                validate: (value) =>
                  getValues().Pin === value || "Pin need to match",
              })}
            />
          </FormRow>
        </WalletDiv>

        <Buttons>
          <Button
            onClick={reset}
            type="reset"
            variation="secondary"
            sizes="medium"
          >
            Cancel
          </Button>
          <Button sizes="medium">
            {isPending ? <SpinnerMini /> : "  Set Pin"}
          </Button>
        </Buttons>
      </Form>
    </StyledSetPin>
  );
}

export default WalletPin;
