import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
    --red-bg: #D72300;
    --text-bg-red: #F9F9F8;
   
    --gray-bg: #2b2b2c;

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