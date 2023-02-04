import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import { bg, Responsive } from "./components/Style"
import CustomBg from "./components/CustomBg"
import Questions from "./components/Questions"

const index = () => (
  <PageLayout height="150vh" bgColor="#f5f5f5">
    <PageWidth width="1500px" margin="0 0 0 0 ">
      <Responsive>
        <div
          data-aos="slide-left"
          data-aos-easing="ease-in-back"
          data-aos-anchor-placement="top-center"
          style={{
            position: "absolute",
            margin: " 8rem 0 8rem 0 ",
          }}
        >
          <CustomBg />
          <Questions />
        </div>
      </Responsive>
    </PageWidth>
  </PageLayout>
)

export default index
