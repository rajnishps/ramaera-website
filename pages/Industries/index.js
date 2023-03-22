import Ramaera from "../page/common/ramaera"
import Navbar from "../../components/Navbar/Navbar"
import Beginning from "../page/page2/beginning"
import Capsule from "../page/page2/capsule"
import Output from "../page/page2/output"
import Consumer from "../page/page2/consumer"
import Business from "../page/page2/business"
import Ecom from "../page/page2/ecom"
import Vision from "../page/page2/vision"
import ScrollToTop from "../page/page2/scrollToTop"
import Footer from "../page/common/footer"
import Head from "next/head"

const industries = () => {
  return (
    <>
      <Head>
        <title>Ramaera Industries - Our Industries</title>
      </Head>
      <Navbar selectedTab={"industries"} />
      <Ramaera imageIndex={1} />
      <Beginning />
      <Capsule />
      <Output />
      <Consumer />
      <Business />
      <Ecom />
      <ScrollToTop />
      <Vision />
      <Footer />
    </>
  )
}

export default industries
