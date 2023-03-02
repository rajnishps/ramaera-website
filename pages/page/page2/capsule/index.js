import PageWidth from "../../../../components/Width/PageWidth"
import CustomBg from "./components/CustomBg"
import Texts from "./components/Texts"

const Capsule = () => {
  return (
    <div id="hotel">
      <PageWidth Left={"left"} width="1500px">
        <CustomBg />
      </PageWidth>
      <Texts />
    </div>
  )
}

export default Capsule
