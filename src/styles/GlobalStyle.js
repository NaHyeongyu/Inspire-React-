import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Vitro-Inspire';
    src: url('/src/assets/fonts/VITRO_INSPIRE.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;

  }

  html, body {
    height: 100%;
  }

  body {
    background-color: #fff;
    color: #333;
    line-height: 1.6;
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: 'Noto Sans', sans-serif;
    cursor: pointer;
  }
  .forPadding {
    padding:35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 320px;
  }

  .offer_item_detial{
    max-width: 410px;
    height: auto;
  }

  .offer_title {
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: bold;
    margin:0;
  }

  .offer_category {
    display: block;
    color: #6f5c80;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 0px
    
  }

  .offer_summary {
    display: block;
    font-size: 18px;
    color: #111111;
    margin-top: 12px
  }
`;

export default GlobalStyle;
