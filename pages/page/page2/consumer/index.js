import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import CustomBg from "./components/CustomBg"

const Consumer = () => {
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

export default Consumer
