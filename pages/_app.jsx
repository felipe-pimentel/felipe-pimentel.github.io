import { useState, useEffect } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/Themes'
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} toggleTheme={ toggleTheme } />
      </ThemeProvider>
    </>
  )
}
