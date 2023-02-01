import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import { bg, Responsive } from "./components/Style"
import CustomBg from "./components/CustomBg"
import Questions from "./components/Questions"

const index = () => (
  <PageLayout bgColor="#f5f5f5" bg={bg}>
    <PageWidth width="1500px" margin="0 0 0 0 ">
      <CustomBg />
      <Responsive>
        <Questions />
      </Responsive>
    </PageWidth>
  </PageLayout>
)

export default index
