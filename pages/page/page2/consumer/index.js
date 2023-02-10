import PageWidth from "../../../../components/Width/PageWidth"
import CustomBg from "./components/CustomBg"
import Texts from "./components/Texts"

const Consumer = () => {
  return (
    <>
      <PageWidth Left={"left"} width="1500px">
        <CustomBg />
      </PageWidth>
      <Texts />
    </>
  )
}

export default Consumer
