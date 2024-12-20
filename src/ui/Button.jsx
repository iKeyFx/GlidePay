import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.8rem;
    padding: 0.4rem 2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    border-radius: 10px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-teal);

    &:hover {
      background-color: var(--color-dark-teal);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 20px;

  ${(props) => sizes[props.sizes]}
  ${(props) => variations[props.variations]}
`;

Button.defaultProps = {
  variations: "primary",
  sizes: "medium",
};
export default Button;
