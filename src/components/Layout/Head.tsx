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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* TODO change meta language depending on locale */}
        <meta name="language" content="English" />
        <meta name="author" content="Kai Takami" />

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
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACKING_CODE}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.GOOGLE_ANALYTICS_TRACKING_CODE}, {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export default HeadLayout
