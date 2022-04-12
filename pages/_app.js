import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mali&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
