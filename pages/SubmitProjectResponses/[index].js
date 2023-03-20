import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import ApplicationDetail from "../page/ProjectApplicationDetail/ApplicationDetail"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const projectApplicationDetail = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ApplicationDetail />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default projectApplicationDetail
