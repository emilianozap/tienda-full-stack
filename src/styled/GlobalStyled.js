import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
    --red-bg: #D72300;
    --text-bg-red: #F5F2F1;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
  --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }

  html{
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
      width: 7px;
      background-color: transparent;
      
    }
    ::-webkit-scrollbar-thumb{
      background-color: var(--red-bg) ;
      border-radius: 20px;
    }
  }

    body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;