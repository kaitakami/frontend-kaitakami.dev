/* eslint-disable @typescript-eslint/restrict-template-expressions */

import Head from "next/head"
import Script from "next/script"


const defaultValues = {
  title: "Kai Takami",
  description: "Fullstack developer based in Japan specializing in creating intuitive websites and applications. I spend most of my time building things for the web."
}
const HeadLayout = ({ title = defaultValues.title, description = defaultValues.description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta
          name="description"
          content={description}
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* TODO change meta language depending on locale */}
        <meta name="language" content="English" />
        <meta name="author" content="Kai Takami" />
        <meta name="theme-color" content="#1f1f1f" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://kaitakami.dev/" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:image" content="https://i.ibb.co/dmgkBCp/meta-tags-export.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://kaitakami.dev/" />
        <meta property="twitter:title" content="Kai Takami" />
        <meta
          property="twitter:description"
          content={description}
        />
        <meta property="twitter:image" content="https://i.ibb.co/dmgkBCp/meta-tags-export.png" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#1f1f1f" />
      </Head>
      {/* Google Analytics */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-LQTC9VDE37" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "G-LQTC9VDE37", {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Umami Analytics */}
      <Script async defer data-website-id="9172449d-890b-4644-b251-6391b200f8d7" src="https://umami.kaitakami.dev/umami.js" />
    </>
  )
}

export default HeadLayout
