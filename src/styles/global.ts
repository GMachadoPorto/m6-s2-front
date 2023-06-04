import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

:root {
  --color-primary: #18D531;
  --color-primary-75: #49D15B;
  --color-primary-50: #7FD38A;
  --color-secondary: #EB5757;
  --color-gray-3: #333333;
  --color-gray-2: #828282;
  --color-gray-1: #e0e0e0;
  --color-gray-0: #f5f5f5;
  --color-negative:#b40000;
  --color-warning:#FFCD07; 
  --color-success:#168821;
  --color-information:#155BCB;

  font-size: 60%;
}

@media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
}

ul {
  list-style: none;
}

input {
  outline: none;
}

.container {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 16px;
}

p, span, h2, h3{
    width: 100%;
    height: max-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`;
