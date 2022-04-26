import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // from index.css
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // my global css
  :root {
    --color-primary: #FF577F;
    --color-primary-50: #FF427F;
    --color-primary-disable: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --success: #3FE864;
    --negative: #E83F5B;

    --toastify-color-error: var(--negative);
    --toastify-color-success: var(--success);
    --toastify-text-color-dark: var(--grey-0);
    --toastify-color-dark: var(--grey-2);

    --title-1: 700 1.125rem 'Inter', sans-serif;
    --title-2: 700 1rem 'Inter', sans-serif;
    --title-3: 700 0.875rem 'Inter', sans-serif;
    --headline: 400 0.75rem 'Inter', sans-serif;
    --headline-bold: 700 0.75rem 'Inter', sans-serif;
    --headline-italic: italic normal 400 0.75rem 'Inter', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    color: var(--grey-0);
  }

  h1 {
    font: var(--title-1);
  }

  h2 {
    font: var(--title-2);
  }

  h3 {
    font: var(--title-3);
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    outline: none;
  }

  .Toastify__toast {
    font: var(--title-3);
  }

  .ReactModal__Overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(18, 18, 20, 0.5) !important;
  }

  .ReactModal__Content {
    position: initial !important;
    inset: unset !important;
    background: var(--grey-3) !important;

    padding: 0 !important;

    border-color: var(--grey-2);

    width: 92.5vw;
    max-width: 23.125rem;
  }
`;