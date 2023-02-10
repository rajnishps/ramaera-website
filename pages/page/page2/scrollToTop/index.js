import styled from "styled-components"
import PageWidth from "../../../../components/Width/PageWidth"

const CustomHeight = styled.div`
  margin: auto 500px 0 0;
  height: 60vh;
  width: 100vw;
`
const Image = styled.img`
  height: 100px;
  cursor: pointer;
`
const scrollUp = () => {
  window.scrollTo(0, 0)
}
const Output = () => {
  return (
    <>
      <PageWidth Left={"left"} width="1500px">
        <CustomHeight>
          <Image onClick={scrollUp} src={"/content/toTop.png"} alt="" />{" "}
        </CustomHeight>
      </PageWidth>
    </>
  )
}

export default Output
