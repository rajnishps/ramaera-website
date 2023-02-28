import Ramaera from "./page/common/ramaera"
import Navbar from "../components/Navbar/Navbar"
import Expansion from "./page/page1/expansion"
import Technology from "./page/page1/technology"
import Accomodation from "./page/page1/accomodation"
import Packaging from "./page/page1/packaging"
import Industry from "./page/page1/industry"
import Agri from "./page/page1/agriculture"
import Essential from "./page/page1/essential"
import Data from "./page/page1/dataPage"
import Story from "./page/page1/story"
import Future from "./page/page1/future"
import Leader from "./page/page1/leader"
import Trust from "./page/page1/trust"
import Promoting from "./page/page1/promoting"
import Footer from "./page/common/footer"
import Transforming from "./page/page1/transforming"
import Faqs from "./page/page1/faqs"
import Tomorrow from "./page/page1/tomorrow"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramaera Industries - Home</title>
      </Head>
      <Navbar selectedTab={"home"} />
      <Ramaera imageIndex={0} />
      <Expansion />
      <Technology />
      <Accomodation />
      <Packaging />
      <Industry />
      <Agri />
      <Essential />
      <Data />
      <Story />
      <Future />
      <Leader />
      {/* <Trust /> */}
      <Promoting />
      <Tomorrow />
      {/* <Faqs /> */}
      <Transforming />
      <Footer />
    </>
  )
}
