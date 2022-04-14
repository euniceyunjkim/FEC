import { createGlobalStyle } from 'styled-components';

export const LightMode = createGlobalStyle`
body {
  font-family: 'Amatic SC', cursive;
  font-family: 'Space Mono', monospace;

}
`;

export const DarkMode = createGlobalStyle`
body {
  font-family: 'Amatic SC', cursive;
  font-family: 'Space Mono', monospace;
  background-color: rgb(125, 115, 142);
  color: white;
}
`;
