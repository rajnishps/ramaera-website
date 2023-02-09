import PageWidth from "../../../../components/Width/PageWidth"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import styled from "styled-components"
import CustomBg from "../beginning/components/CustomBg"

function index() {
  return (
    <PageLayout height="100%" bgColor="#f5f5f5">
      <PageWidth width="1500px" margin="0 0 0 0 ">
        <CustomBg />
      </PageWidth>
    </PageLayout>
  )
}

export default index
