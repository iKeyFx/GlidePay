import styled from "styled-components";
import { useBanks } from "./useBanks";
import FormSample from "../../ui/FormSample";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useWithdrawToBank } from "./useWithdrawTobank";
import SpinnerMini from "../../ui/SpinnerMini";
import { useState } from "react";
import WalletPinOverLay from "./WalletPinOverLay";
import { Button, ButtonComplete, Buttons } from "./FundTransfer";

const Container = styled.div`
  background-color: var(--color-white);
  padding: 3rem 3rem 1.5rem;
  position: relative;
  margin-top: 20px;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
  @media (max-width: 640px) {
    padding: 1rem;
    height: auto;
  }
`;

const StyledP2PHead = styled.div`
  line-height: 1.5;

  p {
    margin-bottom: 0.3rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;
function Withdrawal() {
  const [isVisible3, setIsVisible3] = useState(false);
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { bankList, isPending } = useBanks();
  const { withdrawToBankData, isPending: isPending2 } = useWithdrawToBank();

  const data = bankList?.result;

  const uniqueData = data?.filter(
    (item, index, self) => index === self.findIndex((t) => t.code === item.code)
  );

  const onSubmit = ({ amount, pin, bankName, bankAccount }) => {
    console.log(amount, pin, bankName, bankAccount);
    withdrawToBankData(
      { amount, pin, bankName, bankAccount },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  const handleWallet = (data) => {
    if (data.amount && data.bankName && data.bankAccount) {
      setIsVisible3(true);
    }
  };

  const onClear = () => {
    reset();
  };
  return (
    <Container>
      <StyledP2PHead>
        <h4>Withdraw To Bank</h4>
        <p>Move money to Bank using bank details</p>
      </StyledP2PHead>

      <StyledForm>
        <FormSample label="Amount" error={errors?.amount?.message}>
          <Input
            type="number"
            id="amount"
            placeholder="Enter Sending Amount"
            disabled={isPending2}
            {...register("amount", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Sending amount must be greater than 0",
              },
            })}
          />
        </FormSample>

        <FormSample label="Bank Name" error={errors?.bankName?.message}>
          <Select
            name="bankName"
            id="bankName"
            defaultValue=""
            disabled={isPending || isPending2}
            {...register("bankName", {
              required: "This field is required",
            })}
          >
            <option value="" disabled hidden>
              Select Bank
            </option>

            {uniqueData?.map((data) => (
              <option key={data.code} value={data.code}>
                {data.name}
              </option>
            ))}
          </Select>
        </FormSample>

        <FormSample
          label="Bank Account Number"
          error={errors?.bankAccount?.message}
        >
          <Input
            type="number"
            id="bankAccount"
            disabled={isPending2}
            placeholder="Enter your bank acccount number"
            {...register("bankAccount", {
              required: "This field is required",
              maxLength: {
                value: 10,
                message: "Only 10 Digit Allow",
              },
              minLength: {
                value: 10,
                message: "Enter your 10 digit account number",
              },
            })}
          />
        </FormSample>
        {isVisible3 && (
          <WalletPinOverLay setIsVisible3={setIsVisible3}>
            <div>
              <div>Please enter Your wallet Pin to withdraw to Bank</div>
              <FormSample label="" error={errors?.pin?.message}>
                <Input
                  type="number"
                  id="pin"
                  disabled={isPending2}
                  placeholder="Enter your wallet pin"
                  {...register("pin", {
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
      </StyledForm>
      <Buttons>
        <Button onClick={onClear} cancel="cancel">
          Clear
        </Button>
        <Button onClick={handleSubmit(handleWallet)} disabled={isPending2}>
          Proceed
        </Button>
      </Buttons>
    </Container>
  );
}

export default Withdrawal;
