import styled from "styled-components"
import PageWidth from "../../../../components/Width/PageWidth"
import CustomBg from "./components/CustomBg"
import Texts from "./components/Texts"

const Bgc = styled.div`
  background: #040;
`
const Capsule = () => {
  return (
    <>
      <PageWidth Left={"left"} width="1500px">
        <CustomBg />
      </PageWidth>
      <Texts />
    </>
  )
}

export default Capsule
