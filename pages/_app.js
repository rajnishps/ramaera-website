import { useEffect } from "react"
import "../styles/globals.css"
import AOS from "aos"
import "aos/dist/aos.css"
import NextNProgress from "nextjs-progressbar"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <NextNProgress color="#F9D423" startPosition={0.4} height={3} />
      <Component {...pageProps} />
    </>
  )
}
