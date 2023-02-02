import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import Ramaera from "./page/ramaera"
import Navbar from "../components/Navbar/Navbar"
import Expansion from "./page/expansion"
import Technology from "./page/technology"
import Accomodation from "./page/accomodation"
import Packaging from "./page/packaging"
import Industry from "./page/industry"
import Agri from "./page/agriculture"
import Essential from "./page/essential"
import Data from "./page/dataPage"
import Story from "./page/story"
import Future from "./page/future"
import Leader from "./page/leader"
import Trust from "./page/trust"
import Promoting from "./page/promoting"
import Footer from "./page/footer"
import Transforming from "./page/transforming"
import Faqs from "./page/faqs"
import Tomorrow from "./page/tomorrow"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Ramaera />
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
      <Trust />
      <Promoting />
      <Tomorrow />
      <Faqs />
      <Transforming />
      <Footer />
    </>
  )
}
