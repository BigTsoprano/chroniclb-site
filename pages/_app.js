import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';

import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
  <Head>
  <link rel="shortcut icon" href="/favicon/favicon.ico" />

        <title>Chroniclb | </title>
        <meta property="og:title" content="" key="title" />
      </Head>     
       <Component {...pageProps} />
       <Analytics />
       
     
      

    </Layout>
  )
}
