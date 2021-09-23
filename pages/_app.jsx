import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-bg: hsl(32, 38%, 91%);
    --clr-content: hsl(230, 7%, 16%);
    --clr-primary: hsl(0, 11%, 26%);
    --clr-accent: hsl(30, 87%, 66%);
    --clr-mid-gradient: hsl(28, 71%, 53%);
    --clr-nav-gradient: linear-gradient(180deg, var(--clr-primary) 0%, var(--clr-mid-gradient) 80%, var(--clr-accent) 100%);
    --clr-nav-content: hsl(0, 0%, 100%);
    --clr-nav-bg-hover: hsl(0, 11%, 74%); // a definir
    --clr-nav-content-hover: hsl(230, 7%, 16%);
    --clr-footer-bg: hsl(230, 7%, 16%);
    --clr-footer-content: hsl(0, 0%, 100%);

    @media (prefers-color-scheme: dark) {
      --clr-bg: hsl(240, 100%, 11%);
      --clr-content: hsl(0, 0%, 100%);
      --clr-primary: hsl(283, 43%, 45%);
      --clr-accent: hsl(221, 52%, 56%);
      --clr-mid-gradient: hsl(283, 74%, 48%);
      --clr-nav-gradient: linear-gradient(180deg, var(--clr-primary) 0%, var(--clr-mid-gradient) 70%, var(--clr-accent) 100%);
      --clr-nav-content: hsl(0, 0%, 100%);
      --clr-nav-bg-hover: hsl(283, 43%, 75%); // a definir
      --clr-nav-content-hover: hsl(230, 7%, 16%);
      --clr-footer-bg: hsl(14, 95%, 78%);
      --clr-footer-bg: hsl(230, 7%, 16%);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: var(---clr-content);
  }

  body {
    background: var(--clr-bg);
  }
`

const theme = {
  colors: {
    content: 'var(--clr-content)',
    border: 'var(--clr-content)',
    accent: 'var(--clr-accent)'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
