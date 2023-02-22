import styled from "styled-components"
import PageWidth from "../../../../components/Width/PageWidth"

const CustomHeight = styled.div`
  margin: auto 500px 0 0;
  width: 100vw;
  padding-top: 40vh;
  padding-left: 90vw;
  @media only screen and (max-width: 768px) {
    padding-top: 20vh;
    padding-left: 60vw;
  }
`
const Image = styled.img`
  margin: 2rem;
  height: 7vw;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 20vw;
  }
`
const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
const Output = () => {
  return (
    <>
      <PageWidth Left={"left"} width="1500px">
        <CustomHeight>
          <Image
            onClick={scrollUp}
            src={"/content/toTop.png"}
            alt="scroll up"
          />{" "}
        </CustomHeight>
      </PageWidth>
    </>
  )
}

export default Output
