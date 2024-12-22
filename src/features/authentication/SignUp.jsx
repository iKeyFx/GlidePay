import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useSignUp } from "./useSignUp";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledSignUpCon = styled.div`
  display: grid;
  margin: 2rem 2rem;
  padding: 5rem;
  background-color: var(--color-white-off);

  @media (max-width: 640px) {
    padding: 3rem;
    margin: 1rem;
  }
`;

const Input = styled.input`
  height: 2rem;
  font-size: 16px;
  padding: 2px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SignUpButton = styled.button`
  padding: 10px 20px;
  background-color: var(--color-teal);
  color: var(--color-white);
  border: 1px solid var(--color-teal);

  &:hover {
    background-color: var(--color-dark-teal);
  }
`;

const Form = styled.form`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;
function SignUp() {
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;
  const { signUp, isPending } = useSignUp();

  const onSubmit = ({ eMail, password, firstName, LastName }) => {
    signUp(
      { eMail, password, firstName, LastName },
      {
        onSettled: () => reset(),
      }
    );
  };
  return (
    <StyledSignUpCon>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="First Name" error={errors?.firstName?.message}>
          <Input
            type="text"
            id="firstName"
            disabled={isPending}
            {...register("firstName", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Last Name" error={errors?.LastName?.message}>
          <Input
            type="text"
            id="LastName"
            disabled={isPending}
            {...register("LastName", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Email Address" error={errors?.eMail?.message}>
          <Input
            type="text"
            id="eMail"
            disabled={isPending}
            {...register("eMail", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow label="Phone Number" error={errors?.phone?.message}>
          <Input
            type="number"
            id="phone"
            disabled={isPending}
            {...register("phone", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Provide a valid number",
              },
            })}
          />
        </FormRow>

        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            type="password"
            id="password"
            disabled={isPending}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow label="Confirm Password" error={errors?.cpassword?.message}>
          <Input
            type="password"
            id="cpassword"
            disabled={isPending}
            {...register("cpassword", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords needs to match",
            })}
          />
        </FormRow>
        <SignUpButton>{!isPending ? "Sign Up" : <SpinnerMini />}</SignUpButton>
      </Form>
    </StyledSignUpCon>
  );
}

export default SignUp;
