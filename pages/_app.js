import { useState, useEffect } from "react"
import Router from "next/router"
import "../styles/globals.css"
import Loader from "../components/Loader/Loader"
//import NextNProgress from "nextjs-progressbar"
import AOS from "aos"
import "aos/dist/aos.css"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true))
    Router.events.on("routeChangeComplete", () => setLoading(false))
    Router.events.on("routeChangeError", () => setLoading(false))
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true))
      Router.events.off("routeChangeComplete", () => setLoading(false))
      Router.events.off("routeChangeError", () => setLoading(false))
    }
  }, [Router.events])
  return (
    <>
      <Head>
        <title key="title">Welcome to Ramaera Industries</title>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
        <meta charset="utf-8" />
        <meta itemprop="name" content="Welcome to Ramaera Industries}" />
        <meta
          itemprop="description"
          content="An Integrated multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people."
        />
        <meta itemprop="image" content="logo/logo.png" />
        <meta
          name="description"
          content="An Integrated multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.
"
        />
        <meta property="og:image" content="logo/logo.png" />
      </Head>
      {/* <NextNProgress color="#F9D423" startPosition={0.4} height={3} /> */}

      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  )
}
