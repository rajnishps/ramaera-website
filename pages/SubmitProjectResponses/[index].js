import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import ApplicationDetail from "../page/ProjectApplicationDetail/ApplicationDetail"

const projectApplicationDetail = () => {
  const router = useRouter()
  const projectData = useSelector((state) => state.applicationData.projectData)
  const { index } = router.query
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ApplicationDetail ProjectData={projectData[index - 1]} />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default projectApplicationDetail
