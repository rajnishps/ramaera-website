/* import dynamic from "next/dynamic";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css"; */

import Ramaera from "./page/common/ramaera";
import Navbar from "../components/Navbar/Navbar";
import Expansion from "./page/page1/expansion";
import Technology from "./page/page1/technology";
import Accomodation from "./page/page1/accomodation";
import Packaging from "./page/page1/packaging";
import Industry from "./page/page1/industry";
import Agri from "./page/page1/agriculture";
import Essential from "./page/page1/essential";
import Data from "./page/page1/dataPage";
import Story from "./page/page1/story";
import Future from "./page/page1/future";
import Leader from "./page/page1/leader";
import Trust from "./page/page1/trust";
import Promoting from "./page/page1/promoting";
import Footer from "./page/common/footer";
import Transforming from "./page/page1/transforming";
import Faqs from "./page/page1/faqs";
import Tomorrow from "./page/page1/tomorrow";

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
//check
const inter = Inter({ subsets: ["latin"] })
*/

export default function Home() {
  return (
    <>
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
  );
}
