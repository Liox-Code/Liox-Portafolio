import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

// Icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faLinkedin,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

// Components
import Layout from '../components/Layout'

config.autoAddCss = false
library.add(faLinkedin, faGithub, faWhatsapp)

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
      --primary-color-light: #F3C5DB;
      --secondary-color: #07f49e;
      --secondary-color-light: #E1FDF3;
      --purple: #19162c;
      --purple-dark: #121026;
      --purple-light: #262142;
      --blue: #3a437e;
      --black: #1b1b1b;
      --black-light: #2F2F2F;
      --white: #ffffff;
      
      --linkedin-color: #0077b5;
      --github-color: #333;
      --whatsapp-color: #25d366;


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
