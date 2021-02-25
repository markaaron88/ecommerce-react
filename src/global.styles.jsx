import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: "Open Sans Condensed";
  padding: 40px 60px 40px;
  display: block;
  
 
 @media screen and (max-width: 800px){
     padding:10px;
 }
}
a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;


