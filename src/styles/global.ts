import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  *:focus {
    outline:0;
    border-color: #e5e5e5 !important;
    box-shadow: 0 0 0 0.1rem #e5e5e5!important;
  }

  html, body, #root {
    height:100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font:14px 'Roboto', sans-serif;
  }

  a {
    text-decoration:none;
  }

  ul {
    list-style:none
  }

  button {
    cursor: pointer;
  }
`;
