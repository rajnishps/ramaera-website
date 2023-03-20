import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import ApplicantsDetails from "./applicantsDetails"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

/* const applicantDetail = () => {
  return <>'</>
} */
const applicantDetail = () => {
  const router = useRouter()
  const applicantdata = useSelector((state) => state.applicationData.appData)

  const { index } = router.query
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ApplicantsDetails AppData={applicantdata[index - 1]} />
        </PageWidth>
      </PageLayout>
    </>
  )
}
export default applicantDetail
