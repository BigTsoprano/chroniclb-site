import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Script from 'next/script'
import SEO from './next-seo.config';
import { DefaultSeo } from 'next-seo'; // <-- Import this


import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      
        {/* Other SEO Relevant Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
