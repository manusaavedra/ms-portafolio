import '../styles/globals.css'
import Head from 'next/head'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#FBC02D"
        height={2}
        options={{ showSpinner: false }}
      />
      <Head>
        <link rel="icon" href="logo-default.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
