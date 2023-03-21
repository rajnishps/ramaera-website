import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import ContactUsDetail from "../page/ContactDetail/ContactUsDetail"

const projectApplicationDetail = () => {
  const router = useRouter()
  const contactUsData = useSelector((state) => state.applicationData.contactUsData)
  const { index } = router.query
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div className="responseSpaceDetail"></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ContactUsDetail ContactUsData={contactUsData[index - 1]} />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default projectApplicationDetail
