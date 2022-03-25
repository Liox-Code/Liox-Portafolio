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
        --primary-color: #1B1B1B;
        --primary-light-color: #2F2F2F;

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
