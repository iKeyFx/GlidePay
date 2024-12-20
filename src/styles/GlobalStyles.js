import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-teal: #00897B;
    --color-dark-teal: #054c45;
    --color-cyan: #00BCD4;
    --color-purple-accent: #7E57C2;
    --color-cool-gray: #ECEFF1;
    --color-white: #FFFFFF;
    --color-light-grey: #F5F5F5;
    --color-white-off:  rgb(255, 255, 255, 0.8);
    --color-black: #000;
    --color-blue-grey-200 : #B0BEC5;

    
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;

  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;

  /* color-scheme: light dark; */
   /* color: rgba(255, 255, 255, 0.87);  */
   --background-color: #ECEFF1; 

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  /* color: #646cff; */
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

button:hover {
  border-color: var(--color-teal);
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


body {
  min-height: 100vh;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  /* background-color: var(--color-grey-200);
  color: var(--color-grey-500); */
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-teal);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

@media (prefers-color-scheme: light) {
  :root {
    /* color: #213547;
    background-color: #ffffff; */
  }
  a:hover {
    /* color: #747bff; */
  }
  button {
    /* background-color: #f9f9f9; */
  }
}

`;

export default GlobalStyles;
