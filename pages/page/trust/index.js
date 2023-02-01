import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import { bg, Responsive } from "./components/Style"
import BgRectangle from "./components/BgRectangle"
import Dots from "./components/Dots"
import Review from "./components/Review"

const index = () => (
  <PageLayout bgColor="#f5f5f5" bg={bg}>
    <PageWidth width="1500px" margin="8rem 0 0 0">
      <Text
        Text="Earning the trust of millions"
        lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
        font
        size="55px"
        fw="400"
        align="center"
        lh="45px"
      />
      <Responsive>
        <BgRectangle />
        <Review
          what={"What our customer are saying"}
          avatar={"/content/avatar.png"}
          profileName={"Edward Newgate"}
          profileTitle={"Founder Circle"}
          profileReview={
            "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely"
          }
        />
        <Dots />
      </Responsive>
    </PageWidth>
  </PageLayout>
)

export default index
