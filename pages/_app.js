import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/RenatakutCommons';

const GlobalStyle = createGlobalStyle`

  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: sans-serif;
    background: linear-gradient(0deg, hsla(209, 84%, 88%, 1) 0%, hsla(260, 80%, 88%, 1) 50%, hsla(326, 84%, 88%, 1) 100%);
    /* background: #b088ff url("https://www.wallpapersun.com/wp-content/uploads/2020/07/jzf03bl7lae31-715x1271.jpg") repeat-x fixed;
    background-size: contain; */
    /* background-color: #ebdbea;
    background-image: url("https://www.wallpapersun.com/wp-content/uploads/2020/07/jzf03bl7lae31-715x1271.jpg"); 
    background-repeat: repeat-x;
    background-position: center top;
    background-attachment: fixed;
    background-size: contain; */
    

  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
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
