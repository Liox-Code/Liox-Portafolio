import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

// Components
import Layout from '../components/Layout'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial;
    }

    html{
        font-size: 62.5%;
    }

    :root{
      --primary-color: #d83f87;
      --secondary-color: #07f49e;
      --secondary-color-light: #9BFAD8;
      --purple: #19162c;
      --purple-dark: #121026;
      --purple-light: #262142;
      --blue: #3a437e;
      --black: #1b1b1b;
      --black-light: #2F2F2F;
      --white: #ffffff;


      /* --magenta: #d83f87;
      --magenta-dark: #9c2783;
      --magenta-light: #ba3385;
      --green: #16b896;
      --green-dark: #257c8e;
      --green-light: #07f49e;
      --purple: #601080;
      --purple-dark: #42047e;
      --purple-light: #7e1c82;
      --blue: #334086; */

      --primary-opacity: rgb(15,15,15,0.6);

      --x1: 0.4rem;
      --x2: 0.8rem;
      --x3: 1.2rem;
      --x4: 1.6rem;
      --x5: 2.0rem;
      --x6: 2.4rem;
      --x7: 2.8rem;
      --x8: 3.2rem;
      --x9: 3.6rem;
      --x10: 4rem;
    }
`

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
