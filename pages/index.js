import dynamic from "next/dynamic"
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
import Tom from "./page/tom"
import Faw from "./page/faw"

//const DynamicHeader = dynamic(() => import('../components/header'), {  loading: () => 'Loading...',})

/* const Ramaera = dynamic(() => import("./page/ramaera"))
const Navbar = dynamic(() => import("../components/Navbar/Navbar"))
const Expansion = dynamic(() => import("./page/expansion"))
const Technology = dynamic(() => import("./page/technology"))
const Accomodation = dynamic(() => import("./page/accomodation"))
const Packaging = dynamic(() => import("./page/packaging"))
const Industry = dynamic(() => import("./page/industry"))
const Agri = dynamic(() => import("./page/agriculture"))
const Essential = dynamic(() => import("./page/essential"))
const Data = dynamic(() => import("./page/dataPage"))
const Story = dynamic(() => import("./page/story"))
const Future = dynamic(() => import("./page/future"))
const Leader = dynamic(() => import("./page/leader"))
const Trust = dynamic(() => import("./page/trust"))
const Promoting = dynamic(() => import("./page/promoting"))
const Footer = dynamic(() => import("./page/footer"))
const Transforming = dynamic(() => import("./page/transforming"))
const Faqs = dynamic(() => import("./page/faqs"))
const Tomorrow = dynamic(() => import("./page/tomorrow"))
const Faw = dynamic(() => import("./page/faw")) */
//check
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
      <Tom />
      <Faqs />
      <Faw />
      <Transforming />
      <Footer />
    </>
  )
}
