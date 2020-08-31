import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  html {
     font-size: 62.5%;
  }
  html,body {
     text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
  }
  body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  ul,li {
    list-style: none;
  }
  :root {
    --main: #764abc;
    --link-color:#606770;
    --main-footer-color: #1c1e21;
    --banner-color:#111;
    --bg-footer:#f5f6f7;
    --bg-input:#ebedf0;
    --hover-btn: #d4d5d8;
  }
`
export const fullCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
