import styled from "styled-components";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useFundTransfer } from "./useFundTransfer";
import FormSample from "../../ui/FormSample";
import SpinnerMini from "../../ui/SpinnerMini";
import WalletPinOverLay from "./WalletPinOverLay";
import { useState } from "react";

const Container = styled.div`
  background-color: var(--color-white);
  padding: 3rem 3rem 1.5rem;
  position: relative;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const StyledInputCon = styled.form`
  display: grid;
  flex: 1;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
`;
const StyledP2PHead = styled.div`
  line-height: 1.5;

  p {
    margin-bottom: 0.3rem;
  }
`;

export const Button = styled.button`
  color: ${(props) =>
    props.cancel !== "cancel" ? "var(--color-white)" : "var(--color-black)"};
  background-color: ${(props) =>
    props.cancel !== "cancel"
      ? "var(--color-teal)"
      : "var(--color-light-grey)"};
  font-size: 0.8rem;
  padding: 0.8rem 3rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border: none;
  &:hover {
    color: ${(props) =>
      props.cancel !== "cancel" ? "var(--color-black)" : "var(--color-teal)"};
  }
`;

export const ButtonComplete = styled.button`
  position: absolute;
  bottom: 5%;
  right: 4%;
  color: var(--color-white);
  background-color: var(--color-teal);
  font-size: 0.8rem;
  padding: 0.8rem 3rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border: none;
  &:hover {
    color: var(--color-black);
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 0.6rem;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;
function FundTransfer() {
  const [isVisible, setIsVisible] = useState(false);
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { fundTransfer, isPending } = useFundTransfer();

  const onSubmit = ({ amount, wallet_pin, userAddress }) => {
    const pin = wallet_pin;
    console.log(amount, pin, userAddress);
    fundTransfer(
      { amount, pin, userAddress },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  const handleWallet = (data) => {
    if (data.amount && data.userAddress) {
      setIsVisible(true);
    }
  };

  const onClear = () => {
    reset();
  };
  return (
    <Container>
      <StyledP2PHead>
        <h4>Send P2P</h4>
        <p>send money using usermail or email</p>
      </StyledP2PHead>
      <div>
        <StyledInputCon>
          <FormSample label="To:" error={errors?.userAddress?.message}>
            <Input
              autoComplete="email"
              type="text"
              id="userAddress"
              disabled={isPending}
              {...register("userAddress", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormSample>

          <FormSample label="Amount:" error={errors?.amount?.message}>
            <Input
              type="number"
              id="amount"
              disabled={isPending}
              {...register("amount", {
                required: "This field is required",
                min: {
                  value: 1,
                  message: "Sending amount must be greater than 0",
                },
              })}
            />
          </FormSample>

          {isVisible && (
            <WalletPinOverLay setIsVisible2={setIsVisible} resetp2p={reset}>
              <div>
                <div>
                  Please enter Your wallet Pin to complete the transaction
                </div>
                <FormSample label="" error={errors?.wallet_pin?.message}>
                  <Input
                    id="wallet_pin"
                    type="number"
                    disabled={isPending}
                    placeholder="Enter your wallet pin"
                    {...register("wallet_pin", {
                      required: "Please enter your 4 digit pin",
                      minLength: {
                        value: 4,
                        message: "Your pin is 4 Digit",
                      },
                      maxLength: {
                        value: 4,
                        message: "Pin doesn't exceed 4 digit",
                      },
                    })}
                  />
                </FormSample>
                <ButtonComplete
                  sizes="small"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isPending}
                >
                  {isPending ? <SpinnerMini /> : "Complete Transfer"}
                </ButtonComplete>
              </div>
            </WalletPinOverLay>
          )}
        </StyledInputCon>

        <Buttons>
          <Button onClick={onClear} disabled={isPending} cancel="cancel">
            Clear
          </Button>
          <Button onClick={handleSubmit(handleWallet)} disabled={isPending}>
            Proceed
          </Button>
        </Buttons>
      </div>
    </Container>
  );
}

export default FundTransfer;
