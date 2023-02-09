import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import styled from "styled-components"
import CustomBg from "./components/CustomBg"

const Capsule = () => {
  return (
    <>
      <PageLayout>
        <PageWidth Left={"left"} scale={"100vh"} width="1500px">
          <CustomBg />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default Capsule
