import styled from "styled-components";
import Input from "../../ui/Input";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";

const FormHeading = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
`;
const Label = styled.label``;

const StyledForgetPassword = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: var(--color-teal);
`;

const ButtonLogin = styled(Button)`
  width: 45%;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  transition: border-color 0.25s;
  &:hover {
    background-color: var(--color-teal);
    color: #000000;
    box-shadow: 0px 0.4rem 0.8rem var(--color-teal);
  }
`;

const StyledSignUpText = styled(Link)`
  color: var(--color-teal);
  cursor: pointer;
`;

const Form = styled.form``;
function Login() {
  // const email = "usmansalami@gmail.com";
  // const password = "p@55word";
  const { loginTest, isPending } = useLogin();
  const [email, setEmail] = useState("usmansalami@gmail.com");
  const [password, setPassword] = useState("p@55word");

  function handleClick(e) {
    e.preventDefault();
    if (!email || !password) return;
    loginTest(
      { email, password },
      {
        onSettled: () => {
          // setEmail("");
          // setPassword("");
        },
      }
    );
  }
  return (
    <Form onSubmit={handleClick}>
      <FormHeading>Log in to your account</FormHeading>
      <Label htmlFor="email">Email: </Label>
      <br />
      <Input
        type="email"
        id="email"
        name="email"
        autoComplete="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isPending}
      />
      <br />
      <Label htmlFor="password">Password: </Label>
      <br />
      <Input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isPending}
      />
      <br />
      <StyledForgetPassword>Forget Password</StyledForgetPassword>
      <p>
        Don&apos;t have an account?{" "}
        <StyledSignUpText to="/sign-up">Sign Up</StyledSignUpText>
      </p>
      <ButtonLogin disabled={isPending}>
        {!isPending ? "Login" : <SpinnerMini />}
      </ButtonLogin>
    </Form>
  );
}

export default Login;
