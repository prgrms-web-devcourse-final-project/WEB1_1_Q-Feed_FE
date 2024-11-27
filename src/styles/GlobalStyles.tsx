import { Global, css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'GyeonggiBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Playfair Display', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'GyeonggiBatang', 'Open Sans', serif;
  }

  .en {
    font-family: 'Playfair Display', serif;
    &.header {
      font-family: 'Open Sans', sans-serif;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100%;
    max-width: 430px;
    margin: 0 auto;
    position: relative;
    background-color: white;
  }

  body {
    background-color: #f5f5f5;
    line-height: 1.5;
    word-break: keep-all;
    word-wrap: break-word;
  }

  html.wf-loading * {
    opacity: 0;
  }

  html.wf-active *,
  html.wf-inactive * {
    opacity: 1;
    transition: opacity 0.1s ease-out;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }
`;

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
