import PageWidth from "../../../../components/Width/PageWidth"
import CustomBg from "./components/CustomBg"
import Texts from "./components/Texts"

const Output = () => {
  return (
    <div id="packaging">
      <PageWidth Left={"left"} width="1500px">
        <CustomBg />
      </PageWidth>
      <Texts />
    </div>
  )
}

export default Output
